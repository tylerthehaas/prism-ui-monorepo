FROM quay.octanner.io/base/oct-node:10

WORKDIR /usr/src
COPY . /usr/src

# Install dev deps so the build works
RUN yarn
RUN yarn build:storybook
EXPOSE 9000
CMD yarn start
