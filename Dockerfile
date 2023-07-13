FROM node:18.14.0

WORKDIR /usr/src/app


COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","run","dev"]