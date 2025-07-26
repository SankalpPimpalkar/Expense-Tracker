from django.contrib import admin
from .models import Category, Expense, Income

class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['amount', 'category', 'date']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

class IncomeAdmin(admin.ModelAdmin):
    list_display = ['amount', 'source', 'date']

# Register your models here.
admin.site.register(Category, CategoryAdmin)
admin.site.register(Expense, ExpenseAdmin)
admin.site.register(Income, IncomeAdmin)