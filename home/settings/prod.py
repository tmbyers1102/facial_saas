'''Use this for production'''

from .base import *

DEBUG = False
ALLOWED_HOSTS += ['192.81.211.78']
WSGI_APPLICATION = 'home.wsgi.prod.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'facialsaas',
        'USER': 'facialsaasuser',
        'PASSWORD': 'Lansdale3310',
        'HOST': 'localhost',
        'PORT': '',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'


STRIPE_PUBLISH_KEY = 'pk_test_51Ij3TrBZGm721ul74gHGW55HeLcSxZYuRLH3SbZp7OyXC0yvnwoXCGQrI6Z3ZtcWcVgWjUabicQfPc5qMMBUypXm006Z7wNu4x'
STRIPE_SECRET_KEY = 'sk_test_51Ij3TrBZGm721ul70agvw00n83D0sLEuIxwPdIRVHPrGkowCfZqcWXrCuFuwnKQO3yF39u5wmb0AhAQw8yDhyd9L007I8cAZfp'
