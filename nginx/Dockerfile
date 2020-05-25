FROM nginx:1.17.6-alpine
LABEL maintainer "taltal <taltalsan.1028@gmail.com>"
# ツールをインストール
# RUN apk --update add openssl
# ルートディレクトリを作成
RUN mkdir -p /var/www/develop
# 自己証明書を発行
# RUN openssl genrsa 2048 > server.key \
#  && openssl req -new -key server.key -subj "/C=JP/ST=Tokyo/L=Chuo-ku/O=RMP Inc./OU=web/CN=localhost" > server.csr \
#  && openssl x509 -in server.csr -days 3650 -req -signkey server.key > server.crt \
#  && cp server.crt /etc/nginx/server.crt \
#  && cp server.key /etc/nginx/server.key \
#  && chmod 755 -R /var/www/html \
#  && chmod 400 /etc/nginx/server.key
RUN chmod 755 -R /var/www/develop
