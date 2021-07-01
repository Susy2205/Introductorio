FROM node:14

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
#A wildcard is used to ensure both package.json ans Package-lock.json are copied
#where available
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

#Bind your app to port 8080
EXPOSE 8080

CMD ["node", "server.js"]
