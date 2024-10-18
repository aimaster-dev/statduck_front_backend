from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import TriviaQuestion
from .serializers import TriviaQuestionSerializer
from user.permissions import IsAdmin
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
import random

class AddTriviaQuestions(APIView):

    permission_classes = [IsAdmin]

    def post(self, request):
        data = request.data
        # print(request)
        questions = []
        for i in range(len(data)):
            # print(data)
            question = {
                "question_text": data[i]['question'],
                "possible_answers_A": data[i].get('options')['A'],
                "possible_answers_B": data[i].get('options')['B'],
                "possible_answers_C": data[i].get('options')['C'],
                "possible_answers_D": data[i].get('options')['D'],
                "correct_answer": data[i].get('answer'),
                "explanation": data[i].get('explanation'),
                "category": data[i].get('category') if data[i].get('category') else "general",
                "difficulty_level": data[i].get('difficultyLevel') if data[i].get('difficultyLevel') else "easy",
            }
            print(question)
            questions.append(question)
        serializer = TriviaQuestionSerializer(data=questions, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Trivia questions added successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class getTriviaOnebyOneQuestion(APIView):

    permission_classes = [IsAdmin]

    def get(self, request, pk, format=None):
        print(pk)
        try:
            problem = TriviaQuestion.objects.get(id = pk)
            serializer = TriviaQuestionSerializer(problem)
            return Response({"status": True, "data": serializer.data})
        except problem.DoesNotExist:
            Response({"status": False, "data": {"msg": "Question not found."}}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"status": False, "data": {"msg": str(e)}}, status=status.HTTP_400_BAD_REQUEST)

class TriviaRangeListAPIView(ListAPIView):
    serializer_class = TriviaQuestionSerializer
    permission_classes = [IsAdmin]  # Assuming you want this endpoint to be protected

    def get_queryset(self):
        """
        Optionally restricts the returned users to a given range,
        by filtering against a `start_row_index` and `end_row_index` query parameter in the URL.
        """
        queryset = TriviaQuestion.objects.all()
        start_row_index = self.request.query_params.get('start_row_index', None)
        end_row_index = self.request.query_params.get('end_row_index', None)
        print(start_row_index)
        print(end_row_index)

        if start_row_index is not None and end_row_index is not None:
            start_row_index = int(start_row_index)
            end_row_index = int(end_row_index)
            return queryset[start_row_index:end_row_index]
        return queryset

class TriviaDeleteAPIView(APIView):
    
    permission_classes = [IsAdmin]
    
    def post(self, request, *args, **kwargs):
        id = request.data.get('id')
        if not id:
            return Response({"status": False, "data": {"msg": "Question ID is required."}}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            problem = TriviaQuestion.objects.get(id=id)
            problem.delete()
            return Response({"status": True}, status=status.HTTP_200_OK)
        except problem.DoesNotExist:
            return Response({"status": False, "data": {"msg": "Question not found."}}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"status": False, "data": {"msg": str(e)}}, status=status.HTTP_400_BAD_REQUEST)

class RandomTriviaQuestion(APIView):
    
    permission_classes = [IsAuthenticated]

    def get(self, request):
        count = TriviaQuestion.objects.count()
        if count == 0:
            return Response({"message": "No questions available"}, status=status.HTTP_404_NOT_FOUND)
        random_index = random.randint(0, count - 1)
        random_question = TriviaQuestion.objects.all()[random_index]
        serializer = TriviaQuestionSerializer(random_question)
        return Response(serializer.data, status=status.HTTP_200_OK)