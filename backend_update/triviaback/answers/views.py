from django.shortcuts import render
from .models import Answer
from .serializers import AnswerSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from questions.models import TriviaQuestion
from rest_framework.response import Response
from rest_framework import status
from user.models import User
# Create your views here.
class UserAnswerAddAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        question_id = request.data.get('question_id')
        question = TriviaQuestion.objects.get(id = question_id)
        answer = Answer.objects.get(user = user, question = question)
        if answer is not None:
            answer.delete()
        data = {
            'user': user.pk,
            'question': question.pk,
            'selected_answer': request.data.get('selected_answer')
        }
        answer_serializer = AnswerSerializer(data = data)
        if answer_serializer.is_valid():
            answer_serializer.save()
            xp_value = user.XP
            hearts = user.hearts
            if question.correct_answer == data['selected_answer']:
                if question.difficulty_level == "easy":
                    xp_value += 1
                elif question.difficulty_level == "medium":
                    xp_value += 2
                elif question.difficulty_level == "hard":
                    xp_value += 3
            else:
                hearts -= 1
            user.XP = xp_value
            user.hearts = hearts
            user.save()
            return Response({"status": True, 'data': answer_serializer}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": False, 'data': {'msg': answer_serializer.errors}}, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request):
        user = request.user
        answers = Answer.objects.filters(user = user.pk)
        serializer = AnswerSerializer(answers, many = True)
        if serializer.is_valid():
            return Response({'status': True, 'data': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'status': False, 'data': {'msg': serializer.errors}}, status=status.HTTP_400_BAD_REQUEST)