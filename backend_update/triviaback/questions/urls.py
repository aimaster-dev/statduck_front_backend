# In your_app/urls.py
from django.urls import path
from .views import AddTriviaQuestions, RandomTriviaQuestion, getTriviaOnebyOneQuestion, TriviaRangeListAPIView, TriviaDeleteAPIView

urlpatterns = [
    path('add', AddTriviaQuestions.as_view(), name='add_trivia_questions'),
    path('random', RandomTriviaQuestion.as_view(), name='random_trivia_question'),
    path('id/<int:pk>', getTriviaOnebyOneQuestion.as_view(), name='get_trivia_question'),
    path('range', TriviaRangeListAPIView.as_view(), name='get_trivia_question'),
    path('delete', TriviaDeleteAPIView.as_view(), name='delete_trivia_question'),
]
