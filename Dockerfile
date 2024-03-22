FROM node:latest

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install

RUN rm -rf node_modules

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
