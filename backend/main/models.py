from django.db import models
from django.contrib.auth.models import AbstractUser
from main.manager import *


class User(AbstractUser):
    username=None
    email = models.EmailField(unique=True)  
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    USERNAME_FIELD='email'
    REQUIRED_FIELDS = []
    objects=UserManager()

    def __str__(self):
        return self.email


# Stock model
class Stock(models.Model):
    stock_symbol = models.CharField(max_length=10, unique=True)  
    company_name = models.CharField(max_length=100)
    stock_price = models.DecimalField(max_digits=10, decimal_places=2)
    market_cap = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)  
    volume = models.BigIntegerField(blank=True, null=True)  
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.stock_symbol} - {self.company_name}"



class UserStock(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  
    stock = models.ForeignKey(Stock, on_delete=models.CASCADE)  
    shares_held = models.DecimalField(max_digits=10, decimal_places=2, default=0) 
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)  

    class Meta:
        unique_together = ('user', 'stock')  

    def __str__(self):
        return f"{self.user.username} - {self.stock.stock_symbol} ({self.shares_held} shares)"
