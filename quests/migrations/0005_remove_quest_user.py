# Generated by Django 3.0.3 on 2020-03-27 00:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quests', '0004_remove_quest_completion_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quest',
            name='user',
        ),
    ]
