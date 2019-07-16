FROM quay.octanner.io/base/oct-node:10

WORKDIR /usr/src
COPY . /usr/src

# Install dev deps so the build works
RUN [ "npm", "install"]
RUN [ "npm", "rebuild", "node-sass"]
RUN [ "npm", "run", "build-storybook" ]
EXPOSE 9000
CMD [ "npm", "start" ]
