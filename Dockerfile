FROM node:12

# Create app directory
RUN mkdir -p /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
# Bundle app source
COPY . /app
RUN npm install --silent

CMD [ "npm", "start" ]
