FROM quay.octanner.io/base/oct-node:10

WORKDIR /usr/src/app
COPY . /usr/src/app

# Install dev deps so the build works
RUN [ "npm", "install"]
RUN ["npm", "rebuild", "node-sass"]
RUN [ "npm", "run", "build" ]

CMD [ "npm", "start" ]
