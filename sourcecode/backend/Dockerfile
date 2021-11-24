FROM node:16-slim

WORKDIR /usr/src/app

COPY . ./

RUN apt update && rm -rf /var/lib/{apt,dpkg,cache,log}/ && npm ci --only=production && npm install

EXPOSE 3000

CMD [ "node", "index.js" ]