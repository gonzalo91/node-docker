## BUILD Image
docker build -t [image_name]

## Remove image
docker image rm [id_image]

## Check docker images running
docker ps

## Run docker command 
docker run -p [incommin_port]:[local_port] -d --name [process_name] [image_name] 

## Execute commands in docker instance
docker exec -it [process_name] [command]

## Stop Docker container
docker rm [container_name] -f
### Also deleting volume
docker rm [container_name] -fv

## Bind Docker Volume (-v paramater)
docker run -v $(pwd):/app -p 3000:3000 --name node-app node-app-image

### read-only
docker run -v $(pwd):/app:ro -p 3000:3000 --name node-app node-app-image

## Pass Env Variables
docker run -v $(pwd):/app --env PORT=4000 -p 3000:4000 --name node-app node-app-image