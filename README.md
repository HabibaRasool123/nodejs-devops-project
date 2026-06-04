# Node.js DevOps Kubernetes CI/CD Project

## Architecture
- Node.js Application
- Docker Container
- AWS ECR
- Kubernetes (Minikube on EC2)
- GitHub Actions CI/CD

## CI/CD Flow
1. Code push to GitHub
2. GitHub Actions builds Docker image
3. Image pushed to AWS ECR
4. Kubernetes pulls image
5. App deployed via Service

## Access Method
Since Minikube runs inside EC2:

http://localhost:8080 (via SSH tunnel)

## Commands Used
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get svc
kubectl port-forward svc/nodejs-service 8080:3000

## Status
✔ Fully working DevOps pipeline
