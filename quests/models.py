from django.db import models

# Create your models here.

POINT_CHOICES = (
    (1, 'Effortless (1)'),
    (2, 'Casual (2)'),
    (3, 'Fair (3)'),
    (5, 'Challenging (5)'),
    (8, 'Elite (8)'),
)

class Quest(models.Model):
    # The title of the task
    content = models.CharField(max_length=250)
    # When the task is created
    datetime_created = models.DateTimeField(auto_now_add=True)
    # Will this quest be tackled during the 25 minutes? Only allow for one task at a time? Or a certain number of points? 
    # i.e. let's say a lvl 3 task takes 25 minutes. Then, you could do 4 level 1 tasks, or 2 level 2 tasks, or 1 level 3 task.
    in_progress = models.BooleanField(default=False)
    # Is this task completed? Once completed, points go into the system
    completed = models.BooleanField(default=False)
    # Number of points - see POINT CHOICES
    difficulty = models.IntegerField(choices=POINT_CHOICES)
    # Foreign key to the user.
    # user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)

    # Other ideas: category/tags, due date.