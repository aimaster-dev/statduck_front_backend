from django.urls import path
from .views import WalletSignupView, LoginView, EmailVerificationView, ActivateView, RequestNonceView, ResendActivationEmail

urlpatterns = [
    path('wallet-signup', WalletSignupView.as_view(), name='wallet-signup'),
    path('login', LoginView.as_view(), name='login'),
    path('verify-email', EmailVerificationView.as_view(), name='verify-email'),
    path('activate/<uidb64>/<token>', ActivateView.as_view(), name='activate'),
    path('request-nonce', RequestNonceView.as_view(), name='request-nonce'),
    path('resend-activation', ResendActivationEmail.as_view(), name='resend-activation'),
]
