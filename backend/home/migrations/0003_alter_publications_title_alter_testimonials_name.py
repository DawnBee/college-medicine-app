# Generated by Django 5.0.6 on 2024-05-12 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_announcements_title_alter_events_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publications',
            name='title',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='testimonials',
            name='name',
            field=models.CharField(max_length=40, unique=True),
        ),
    ]