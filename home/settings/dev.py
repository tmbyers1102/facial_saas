'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['127.0.0.1']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)

STRIPE_PUBLISH_KEY = 'pk_test_51Ij3TrBZGm721ul74gHGW55HeLcSxZYuRLH3SbZp7OyXC0yvnwoXCGQrI6Z3ZtcWcVgWjUabicQfPc5qMMBUypXm006Z7wNu4x'
STRIPE_SECRET_KEY = 'sk_test_51Ij3TrBZGm721ul70agvw00n83D0sLEuIxwPdIRVHPrGkowCfZqcWXrCuFuwnKQO3yF39u5wmb0AhAQw8yDhyd9L007I8cAZfp'
# STRIPE_PUBLISH_KEY = 'pk_live_51Ij3TrBZGm721ul7VP8hY9FjLIu4m09hWduomJrksrYpbmfKFLRJX5OcmW6Td4g7JBOe8utJZVbG7HjRA2deSu0j00MyUW9RyP'
# STRIPE_SECRET_KEY = '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'
