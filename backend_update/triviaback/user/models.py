from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import secrets

class UserManager(BaseUserManager):
    def create_user(self, wallet_addr, role, email=None):
        if not wallet_addr:
            raise ValueError('Users must have a wallet address')
        nonce = secrets.token_hex(16)
        user = self.model(wallet_addr=wallet_addr, nonce=nonce, email=self.normalize_email(email), role=role, is_active=False)
        user.save(using=self._db)
        return user

    def create_superuser(self, wallet_addr, role, email=None):
        user = self.create_user(wallet_addr, role, email)
        user.is_admin = True
        user.is_active = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('client', 'Client'),
    )
    wallet_addr = models.CharField(max_length=255, unique=True)
    nonce = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True, null=True, blank=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    is_active = models.BooleanField(default=True)
    email_verified = models.BooleanField(default=False)
    XP = models.IntegerField(default=0)
    hearts = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'wallet_addr'
    REQUIRED_FIELDS = ['role']
    
    class Meta:
        db_table = 'user_tbl'
    def __str__(self):
        return self.wallet_addr

    @property
    def is_staff(self):
        return self.is_admin
