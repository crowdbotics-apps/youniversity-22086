from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    VendorViewSet,
    LocationViewSet,
    FavoritesViewSet,
    VendorDetailViewSet,
    CategoryViewSet,
    FaqViewSet,
    PresenterViewSet,
    ScheduleViewSet,
    MyScheduleViewSet,
    SponsorViewSet,
)

router = DefaultRouter()
router.register("location", LocationViewSet)
router.register("category", CategoryViewSet)
router.register("presenter", PresenterViewSet)
router.register("vendor", VendorViewSet)
router.register("myschedule", MyScheduleViewSet)
router.register("vendordetail", VendorDetailViewSet)
router.register("faq", FaqViewSet)
router.register("sponsor", SponsorViewSet)
router.register("favorites", FavoritesViewSet)
router.register("schedule", ScheduleViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
