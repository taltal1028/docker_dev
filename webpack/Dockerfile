FROM node:8.17.0-alpine
# 作成者
LABEL maintainer "taltal <taltalsan.1028@gmail.com>"
# 作業フォルダを指定
WORKDIR /app
# webpackに必要なモジュールをインストール
RUN apk update \
&& yarn add yarn \
# && yarn init -y \
&& yarn add webpack webpack-cli \
&& yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/register \
&& yarn add react react-dom \
&& yarn add -D babel-loader babel-core babel-preset-es2015 babel-preset-react \
&& yarn add -D webpack-dev-server html-loader html-webpack-plugin \
&& yarn add -D eslint eslint-config-prettier eslint-loader eslint-plugin-prettier eslint-plugin-react \
&& yarn add -D css-loader mini-css-extract-plugin node-sass prettier sass-loader style-loader uglifyjs-webpack-plugin
CMD ["yarn", "run", "build:dev"]
