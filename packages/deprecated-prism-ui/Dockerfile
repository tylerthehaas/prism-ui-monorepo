FROM quay.octanner.io/base/oct-node:10

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn
RUN yarn run build

CMD [ "yarn", "start" ]
