from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    

class Expense(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date = models.DateField()
    note = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.category} - {self.amount}'

class Income(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    source = models.CharField(max_length=255)
    date = models.DateField()
    note = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.source} - {self.amount}'