from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from .models import User
from .serializers import NonceSerializer, EmailVerificationSerializer, LoginSerializer
import secrets
from eth_account.messages import encode_defunct
from eth_account import Account
from .tokens import account_activation_token
from django.core.mail import EmailMessage
from rest_framework.permissions import IsAuthenticated

class WalletSignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        wallet_addr = request.data.get('wallet_addr')
        role = request.data.get('role', 'client')
        nonce = secrets.token_hex(16)
        user, created = User.objects.get_or_create(wallet_addr=wallet_addr, role=role, defaults={'nonce': nonce})
        if not created:
            user.nonce = nonce
            user.save()
        return Response({'wallet_addr': wallet_addr, 'nonce': nonce}, status=status.HTTP_201_CREATED)

class RequestNonceView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = NonceSerializer(data=request.data)
        if serializer.is_valid():
            wallet_addr = serializer.validated_data['wallet_addr']
            user = get_object_or_404(User, wallet_addr=wallet_addr)
            user.nonce = secrets.token_hex(16)
            user.save()
            return Response({'wallet_addr': wallet_addr, 'nonce': user.nonce}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            wallet_addr = serializer.validated_data['wallet_addr']
            signature = serializer.validated_data['signature']
            user = get_object_or_404(User, wallet_addr=wallet_addr)
            message = encode_defunct(text=user.nonce)
            if Account.recover_message(message, signature=signature) == wallet_addr:
                user.nonce = secrets.token_hex(16)
                user.save()
                refresh = RefreshToken.for_user(user)
                return Response({'refresh': str(refresh), 'access': str(refresh.access_token)}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid signature'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmailVerificationView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.user)
        serializer = EmailVerificationSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = request.user
            user.email = email
            user.email_verified = False
            user.save()

            mail_subject = 'Activate your account.'
            token = account_activation_token.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            activation_url = f"https://localhost:8001/email_verify?uid={uid}&token={token}"
            message = render_to_string('acc_active_email.html', {
                'activation_url': activation_url,
            })
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.content_subtype = "html"
            email.send()
            return Response({'message': 'Verification email sent.'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ResendActivationEmail(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        user = request.user
        try:
            if not user.email_verified:
                mail_subject = 'Activate your account.'
                token = account_activation_token.make_token(user)
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                activation_url = f"https://localhost:8001/email_verify?uid={uid}&token={token}"
                message = render_to_string('acc_active_email.html', {
                    'activation_url': activation_url,
                })
                email = EmailMessage(mail_subject, message, to=[user.email])
                email.content_subtype = "html"
                email.send()
                return Response({"status": True, "data": "A new activation email has been sent."}, status=status.HTTP_200_OK)
            else:
                return Response({"status": False, "data": "This email is already active."}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({"status": False, "data": "No user found with this email address."}, status=status.HTTP_404_NOT_FOUND)

class ActivateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, uidb64, token):
        uidb64 = request.data.get("user_id")
        token = request.data.get("token")
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and account_activation_token.check_token(user, token):
            user.email_verified = True
            user.save()
            mail_subject = 'Activate Successfully'
            message = render_to_string('verification_success_email.html', {
                'user': user,
            })
            email = EmailMessage(mail_subject, message, to=[user.email])
            email.content_subtype = "html"
            email.send()
            return Response({"status": True, "data": "Your account has been successfully activated."}, status=status.HTTP_200_OK)
        else:
            return Response({"status": False, "data": "Activation link is invalid!"}, status=status.HTTP_400_BAD_REQUEST)