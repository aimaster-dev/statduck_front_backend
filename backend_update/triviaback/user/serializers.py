from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['wallet_addr', 'email', 'role', 'is_active', 'created_at', 'updated_at']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['wallet_addr', 'role']

class EmailVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField()

class LoginSerializer(serializers.Serializer):
    wallet_addr = serializers.CharField()
    signature = serializers.CharField()

class NonceSerializer(serializers.Serializer):
    wallet_addr = serializers.CharField()
