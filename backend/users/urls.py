from django.urls import path
from users import views
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', views.UsersViewSet)

urlpatterns = router.urls
