docker build -t ashboro/multi-client:latest -t ashboro/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t ashboro/multi-server:latest -t ashboro/multi-server:$SHA   -f ./client/Dockerfile ./server
docker build -t ashboro/multi-worker:latest -t ashboro/multi-worker:$SHA -f ./client/Dockerfile ./worker
docker push ashboro/multi-client:latest
docker push ashboro/multi-server:latest
docker push ashboro/multi-worker:latest
docker push ashboro/multi-client:$SHA
docker push ashboro/multi-server:$SHA
docker push ashboro/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/sever-deployment server=ashboro/multi-server:$SHA
kubectl set image deployments/client-deployment client=ashboro/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=ashboro/multi-worker:$SHA