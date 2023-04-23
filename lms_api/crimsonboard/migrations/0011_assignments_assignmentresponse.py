# Generated by Django 4.2 on 2023-04-21 08:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crimsonboard', '0010_alter_instructor_password'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(null=True)),
                ('creation_time', models.DateTimeField(auto_now_add=True)),
                ('deadline', models.DateTimeField()),
                ('assignment_file', models.FileField(null=True, upload_to='assignments/')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crimsonboard.course')),
                ('instructor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crimsonboard.instructor')),
            ],
            options={
                'verbose_name_plural': '7. Assignments',
            },
        ),
        migrations.CreateModel(
            name='AssignmentResponse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reponse_text', models.TextField(null=True)),
                ('response_file', models.FileField(null=True, upload_to='assignments/responses')),
                ('submission_time', models.DateTimeField(auto_now_add=True)),
                ('grade', models.FloatField(default=0)),
                ('assignment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crimsonboard.assignments')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crimsonboard.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crimsonboard.student')),
            ],
            options={
                'verbose_name_plural': '8. Assignment Responses',
            },
        ),
    ]
