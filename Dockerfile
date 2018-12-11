FROM node:10.14.1-alpine

WORKDIR /resumeapp

ADD . /resumeapp

CMD ['node', 'app.js']