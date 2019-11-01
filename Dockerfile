FROM node:10.16.3-alpine

# Create a work directory and copy over our dependency manifest files.
WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

# Expose PORT 3000 on our virtual machine so we can run our server
##EXPOSE 6000