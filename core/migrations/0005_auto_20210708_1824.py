# Generated by Django 2.2.1 on 2021-07-08 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_user_is_member'),
    ]

    operations = [
        migrations.AddField(
            model_name='membership',
            name='stripe_subscription_item_id',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AddField(
            model_name='trackedrequest',
            name='usage_record_id',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
