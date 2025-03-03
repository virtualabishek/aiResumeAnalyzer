from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status, viewsets
from .models import Resume
from .serializers import ResumeSerializer
from .resume_parser import extract_text_from_resume, extract_details

# Create your views here
class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

    def create(self, request, *args, **kwargs):
        file = request.FILES.get("file")
        if not file:
            return Response({"error": "No file uploaded"}, status=status.HTTP_400_BAD_REQUEST)

        with open(f"media/resumes/{file.name}", "wb+") as destination:
            for chunk in file.chunks():
                destination.write(chunk)

        text = extract_text_from_resume(f"media/resumes/{file.name}")
        details = extract_details(text)

        resume = Resume.objects.create(
            name=details["name"],
            email=details["email"],
            phone=details["phone"],
            skills=details["skills"],
            file=file,
        )

        return Response(ResumeSerializer(resume).data, status=status.HTTP_201_CREATED)



