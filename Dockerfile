# FROM node:lastest
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# CMD ["npm","nodemon server.js"]


FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "npm", "start" ]

