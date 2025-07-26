from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ExpenseViewSet, IncomeViewSet, summary
from django.urls import path, include

router = DefaultRouter()
router.register('category', CategoryViewSet)
router.register('expense', ExpenseViewSet)
router.register('income', IncomeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('summary/', summary)
]
