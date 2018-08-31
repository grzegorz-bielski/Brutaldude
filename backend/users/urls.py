from users import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', views.UsersViewSet)

urlpatterns = router.urls
