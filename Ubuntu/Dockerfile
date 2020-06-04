# instalamos la version de ubuntu 14.04
FROM ubuntu:14.04

# Install Node.js
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_5.x | sudo bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Carpeta donde se va a trabajar
WORKDIR /usr/src/app
COPY package*.json ./
COPY index.js ./

# instalar todo lo necesario del package
RUN npm install
EXPOSE 3000:3000
CMD node index.js
