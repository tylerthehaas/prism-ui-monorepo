FROM quay.octanner.io/base/oct-node:8.4.0

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

EXPOSE 9000

CMD [ "npm", "start" ]
