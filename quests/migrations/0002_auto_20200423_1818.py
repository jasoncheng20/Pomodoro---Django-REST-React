# Generated by Django 3.0.3 on 2020-04-23 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quests', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quest',
            name='completion_time',
        ),
        migrations.RemoveField(
            model_name='quest',
            name='user',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]