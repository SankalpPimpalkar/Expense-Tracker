from rest_framework import viewsets
from .models import Category, Expense, Income
from .serializers import CategorySerializer, ExpenseSerializer, IncomeSerializer
from rest_framework.decorators import api_view
from .models import Expense, Income
from django.db.models import Sum
from rest_framework.response import Response

# Create your views here.
class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

    def get_queryset(self):
        month = self.request.query_params.get('month')
        queryset = Expense.objects.all()

        if(month):
            queryset.filter(date__month=month)
        return queryset

class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

@api_view(['GET'])
def summary(request):
    total_income = Income.objects.aggregate(Sum('amount'))['amount__sum'] or 0
    total_expense = Expense.objects.aggregate(Sum('amount'))['amount__sum'] or 0
    balance = total_income - total_expense

    return Response({
        'total_income': total_income,
        'total_expense': total_expense,
        'balance': balance,
    })