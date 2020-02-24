FROM node:8.17.0-alpine
MAINTAINER taltal
ENV NODE_ENV=development
RUN apk update \
  && yarn add yarn \
  && yarn global add express-generator \
  && express --view=pug api
RUN chmod 666 /api
WORKDIR /api
COPY source/ /api/
#CMD ["yarn", "start"]
