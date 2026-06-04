# Node.js DevOps Kubernetes CI/CD Project

**⚙️ Technologies Used**
Node.js (Backend Application)
Docker (Containerization)
Kubernetes (Minikube)
AWS ECR (Container Registry)
AWS EC2 (Cloud Server)
GitHub Actions (CI/CD Pipeline)
Linux (Ubuntu/EC2 CLI)

## Architecture
- Node.js Application
- Docker Container
- AWS ECR
- Kubernetes (Minikube on EC2)
- GitHub Actions CI/CD

🚀 CI/CD Pipeline Workflow
Developer pushes code to GitHub repository
GitHub Actions triggers automatically
Docker image is built from Dockerfile
Image is tagged and pushed to AWS ECR
Kubernetes deployment pulls latest image
Application is deployed on Minikube cluster
Service exposes the application internally

## Access Method
Since Minikube runs inside EC2:

http://localhost:8080 (via SSH tunnel)

## Commands Used
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get svc
kubectl port-forward svc/nodejs-service 8080:3000

**📁 Project Structure**
nodejs-devops-project/
│
├── deployment.yaml
├── service.yaml
├── Dockerfile
├── package.json
├── package-lock.json
├── app.js
├── .github/workflows/deploy.yml
├── .gitignore
└── README.md

## Status
✔ Fully working DevOps pipeline
