FROM php:7.2-fpm
# 作成者
MAINTAINER taltal
# Install extensions
RUN apt-get update \
  && apt-get install -y libicu-dev zlib1g-dev libpq-dev libzip-dev libpng-dev zip unzip \
  # && apt-get install -y libicu-dev zlib1g-dev libpq-dev libzip-dev libpng-dev zip unzip curl vim procps git \
  # && docker-php-ext-install intl opcache \
  # && docker-php-ext-enable intl opcache \
  && docker-php-ext-install pdo_mysql mysqli mbstring \
  && docker-php-ext-install pdo pdo_pgsql \
  # && docker-php-ext-install gd \
  && apt-get clean && rm -rf /var/lib/apt/lists/*
# RUN chown -R www-user:nginx /var/www/ \
# && chown -R www-user:nginx /var/run/ \
# && chown -R www-user:nginx /var/log/
# RUN useradd -ms /bin/bash www-user \
# RUN useradd -ms /bin/bash -g nginx www-user \˝
# && echo "www-user:piyohoge" | chpasswd
# USER www-user
