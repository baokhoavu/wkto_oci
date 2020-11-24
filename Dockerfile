FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# COPY APP SOURCE DIR
COPY . /usr/src/app

# RUN NPM INSTALL
RUN npm install -f

# EXPOSE PORT
EXPOSE 3000

# EXECUTE THIS COMMAND
CMD ["npm", "start"]