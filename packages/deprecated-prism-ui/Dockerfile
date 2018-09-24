FROM quay.octanner.io/base/oct-node:10

WORKDIR /usr/src/app
COPY . /usr/src/app

# Install dev deps so the build works
RUN [ "yarn", "install", "--production=false" ]
RUN [ "yarn", "build" ]

CMD [ "yarn", "start" ]
