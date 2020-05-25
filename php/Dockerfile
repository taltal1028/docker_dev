FROM php:7.3-fpm-alpine
LABEL maintainer "taltal <taltalsan.1028@gmail.com>"

ARG TZ
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer

RUN set -eux && \
  apk add --update-cache --no-cache --virtual=.build-dependencies tzdata && \
  cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
  apk del .build-dependencies && \
  docker-php-ext-install bcmath pdo_mysql && \
  curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer && \
  composer config -g repos.packagist composer https://packagist.jp && \
  composer global require hirak/prestissimo

# Install extensions
# RUN apt-get update \
#   && apt-get install -y libicu-dev zlib1g-dev libpq-dev libzip-dev libpng-dev zip unzip \
  # && apt-get install -y libicu-dev zlib1g-dev libpq-dev libzip-dev libpng-dev zip unzip curl vim procps git \
  # && docker-php-ext-install intl opcache \
  # && docker-php-ext-enable intl opcache \
  # && docker-php-ext-install pdo_mysql mysqli mbstring \
  # && docker-php-ext-install pdo pdo_pgsql \
  # && docker-php-ext-install gd \
  # && apt-get clean && rm -rf /var/lib/apt/lists/*
# RUN chown -R www-user:nginx /var/www/ \
# && chown -R www-user:nginx /var/run/ \
# && chown -R www-user:nginx /var/log/
# RUN useradd -ms /bin/bash www-user \
# RUN useradd -ms /bin/bash -g nginx www-user \˝
# && echo "www-user:piyohoge" | chpasswd
# USER www-user
