# Sopes1
Dockerfile Ubuntu Distroless

Sistemas operativos 1
Eduardo Javier Hevia
201313898

# UBUNTU
sudo docker pull ubuntu:18.04
sudo docker images

sudo docker run -v /home/javier/Documentos/Practica1Sopes1:/app/ -p 3000:3000 --name "Ubuntu_Nodejs" -it ubuntu:18.04 /bin/bash

apt-get update
apt-get install nodejs
apt-get install npm
npm install
node index.js

## Comando para entrar a nuestro ubuntu (CMD)
sudo docker exec -it idcontenedor /bin/bash

## Miramos lo que tiene nuestro express
	curl -i localhost:3000

# DISTROLESS
## ver imagenes docker
	sudo docker images

##  ver contenedores funcionando
	sudo docker ps -a 

## creamos la imagen desde el dockerfile
	sudo docker build -t javier/node-web .

## creamos el contenedor
	sudo docker run -p 3000:3000 -d javier/node-web
	
## se imprimir lo que esta haciendo el servidor
	sudo docker logs idcontenedor
  
## ver imagienes docker
	sudo docker images

## eliminar imagenes docker
	sudo docker image rm 


## contenedores funcionando
	sudo docker ps -a

## detener contenedor
	sudo docker stop idcontenedor

## eliminar contenedor
	sudo docker rm idcontenedor
