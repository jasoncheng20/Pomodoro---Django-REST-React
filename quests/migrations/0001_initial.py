# Generated by Django 3.0.3 on 2020-03-26 23:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=1000)),
                ('points', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Quest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=250)),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('in_progress', models.BooleanField(default=False)),
                ('completed', models.BooleanField(default=False)),
                ('completion_time', models.DurationField()),
                ('difficulty', models.IntegerField(choices=[(1, 'Effortless (1)'), (2, 'Casual (2)'), (3, 'Fair (3)'), (5, 'Challenging (5)'), (8, 'Elite (8)')])),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quests.User')),
            ],
        ),
    ]
