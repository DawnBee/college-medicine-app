# Generated by Django 5.0.6 on 2024-06-10 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('others', '0002_activities_news'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activities',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='news',
            name='title',
            field=models.CharField(max_length=30),
        ),
    ]
