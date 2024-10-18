from django.db import models
from user.models import User
from questions.models import TriviaQuestion

# Create your models here.
class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(TriviaQuestion, on_delete=models.CASCADE)
    selected_answer = models.CharField(max_length=30)
    timestamp = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'answer_tbl'