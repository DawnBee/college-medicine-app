# Generated by Django 5.0.6 on 2024-06-09 04:56

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0002_alter_benefactors_options_remove_benefactors_content_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Curriculum',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('pdf', models.FileField(blank=True, null=True, upload_to='curriculum')),
                ('date_added', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Curriculum',
                'verbose_name_plural': 'Curriculum',
            },
        ),
    ]
