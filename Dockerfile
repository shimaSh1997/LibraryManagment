# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install -g nodemon

# Install dependencies
RUN npm install --production

# Bundle app source
COPY . .

# Expose the port on which your app runs
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]
