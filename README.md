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

## Docker Compose
(up all services within docker-compose.yml with detach)
docker-compose up -d

(building images again and adding files for configuration.. order matters)
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

(Brings down all services with their volumes, incluiding those which are use for databases)
docker-compose down -v

(It will delete all volumes unused )
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down;
docker volume prune;

(docker stack)
docker stack deploy [-c file_docker-compose] [Stackname]
docker stack deploy -c docker-compose.yml -c docker-compose.dev.yml nodeapp

