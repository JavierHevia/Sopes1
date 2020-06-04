# Busco el node y lo llamo build-env
FROM node:10.17.0 AS build-env

# Eligo donde quiero trabjar
WORKDIR /app

# Copio mis archivos
COPY package*.json ./
COPY index.js ./

# Instalo las dependencias
RUN npm install

# Elijo que quiero trabajar
FROM gcr.io/distroless/nodejs
COPY --from=build-env /app /app
WORKDIR /app

# Expongo el puerto
EXPOSE 3000:3000
CMD ["index.js"]
