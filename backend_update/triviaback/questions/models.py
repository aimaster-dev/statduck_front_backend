# In your_app/models.py
from django.db import models

class TriviaQuestion(models.Model):
    question_text = models.CharField(max_length=255)
    A = models.CharField(max_length=255)
    B = models.CharField(max_length=255)
    C = models.CharField(max_length=255)
    D = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=20)  # Assuming A, B, C, or D
    category = models.CharField(max_length=100, default="general")
    explanation = models.CharField(max_length=255)
    difficulty_level = models.CharField(max_length=50, default="easy")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'questions_tbl'

    def __str__(self):
        return self.question_text