FROM node:14-slim
WORKDIR  /backend/server
COPY package.json backend/server
RUN npm install
COPY . .
CMD [ "npm", "npm run server"]
