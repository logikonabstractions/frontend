# FROM node:18-alpine
FROM node:18
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app && mkdir -p /home/node/app/frontend && chown -R node:node /home/node/app/frontend
WORKDIR /home/node/app/frontend
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 3001
USER node
CMD ["npm", "start"]
