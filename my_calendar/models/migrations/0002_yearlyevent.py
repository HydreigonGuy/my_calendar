# Generated by Django 5.2.3 on 2025-06-13 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('models', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='YearlyEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('month', models.SmallIntegerField()),
                ('day', models.SmallIntegerField()),
            ],
        ),
    ]
