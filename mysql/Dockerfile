# MySQLをインストール
FROM mysql:8.0
# 「Authentication plugin 'caching_sha2_password' cannot be loaded:」とエラーが発生するため
# Mysqlの認証方式を「caching_sha2_password」から「mysql_native_password」に変更
# COPY app.cnf /etc/mysql/conf.d/app.cnf

CMD ["mysqld"]
