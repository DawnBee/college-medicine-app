# Generated by Django 5.0.6 on 2024-07-02 07:21

import cloudinary_storage.storage
import django_resized.forms
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_announcements_title_alter_events_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, default='default.png', force_format=None, keep_meta=True, null=True, quality=85, scale=None, size=[800, 800], upload_to='events'),
        ),
        migrations.AlterField(
            model_name='publications',
            name='pdf',
            field=models.FileField(blank=True, null=True, storage=cloudinary_storage.storage.RawMediaCloudinaryStorage(), upload_to='publications/pdfs/'),
        ),
        migrations.AlterField(
            model_name='testimonials',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, default='default.png', force_format=None, keep_meta=True, null=True, quality=85, scale=None, size=[300, 300], upload_to='testimonials'),
        ),
    ]