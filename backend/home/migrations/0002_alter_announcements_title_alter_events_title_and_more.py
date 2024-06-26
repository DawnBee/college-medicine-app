# Generated by Django 5.0.6 on 2024-06-20 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcements',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='events',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='publications',
            name='title',
            field=models.CharField(max_length=150, unique=True),
        ),
        migrations.AlterField(
            model_name='testimonials',
            name='name',
            field=models.CharField(max_length=60, unique=True),
        ),
    ]
