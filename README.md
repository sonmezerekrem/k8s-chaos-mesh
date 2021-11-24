# Simple K8S Web Deployment With Chaos Mesh

## Prequisites

- docker, kubectl, helm installed
- running kubernetes cluster

## Docs

- [Docker Docs](https://docs.docker.com/)
- [Kubernetes Docs](https://kubernetes.io/docs/home/)
- [Helm Docs](https://helm.sh/docs/)
- [Chaos Mesh Docs](https://chaos-mesh.org/docs/)

## Commands

Create backend docker image
> cd sourcecode/backend && docker build . -t simple-k8s-backend && cd ../..

Create frontend docker image
> cd sourcecode/frontend && docker build . -t simple-k8s-frontend && cd ../..

Check images
> docker images | grep simple-k8s

Cd k8s/setup
> cd k8s/setup

Create namespaces
> kubectl apply -f namespaces/

Create backend deploy
> kubectl apply -f deploys/deploy-backend.yaml

Create backend clusterip service
> kubectl apply -f services/service-backend.yaml

Create frontend deploy
> kubectl apply -f deploys/deploy-frontend.yaml

Create frontend loadbalancer service
> kubectl apply -f services/service-frontend.yaml

Get pods
> kubectl get pod -n simple-k8s

Get services
> kubectl get svc -n simple-k8s

Add the chaos mesh repository to the helm repository
> helm repo add chaos-mesh https://charts.chaos-mesh.org

Install chaos mesh
> helm install chaos-mesh chaos-mesh/chaos-mesh --namespace=chaos-mesh --version 2.0.4 --set dnsServer.create=true

Verify chaos mesh installation
> kubectl get pod -n chaos-mesh

Forward chaos mesh dashboard to nodeport at port 2333
> kubectl apply -f services/service-dashboard.yaml

Cd chaos tests
> cd ../chaos

Run Tests
> kubectl apply -f <file>