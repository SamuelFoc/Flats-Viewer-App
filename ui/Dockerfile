FROM node:14

EXPOSE 4000

WORKDIR /src

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"]