# Generated by Django 2.1.2 on 2018-11-02 12:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('expenses', '0009_templates_with_custom_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeletionRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(choices=[('category', 'category'), ('expense', 'expense'), ('billitem', 'billitem'), ('expensetemplate', 'expensetemplate')], max_length=20)),
                ('object_pk', models.IntegerField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
