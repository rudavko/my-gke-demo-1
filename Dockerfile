FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 80

CMD ["npm","start"]
