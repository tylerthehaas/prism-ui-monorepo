FROM quay.octanner.io/base/oct-node:10

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
