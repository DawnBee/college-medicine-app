# Generated by Django 5.0.6 on 2024-06-09 07:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('faculty', '0002_lecturers'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orgchart',
            options={'verbose_name': 'Organizational Chart', 'verbose_name_plural': 'Org Chart'},
        ),
    ]