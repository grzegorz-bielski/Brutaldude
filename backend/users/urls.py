from django.urls import path
from users import views

urlpatterns = [
    path('users/', views.UsersList.as_view()),
    path('users/<pk>/', views.UserDetail.as_view()),
]
