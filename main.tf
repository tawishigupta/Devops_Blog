terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {}

# Pull Docker images from Docker Hub
data "docker_image" "backend_image" {
  name = "mokshada21/devops-blog:backend-latest"
}

data "docker_image" "frontend_image" {
  name = "mokshada21/devops-blog:frontend-latest"
}

# Backend container with environment variables
resource "docker_container" "backend_container" {
  name  = "backend_app"
  image = data.docker_image.backend_image.name

  ports {
    internal = 5000
    external = 5000
  }

  env = [
    "MONGODB_URI=${var.MONGODB_URI}",
    "TOKEN_KEY=${var.TOKEN_KEY}",
    "EMAIL=${var.EMAIL}",
    "PASSWORD=${var.PASSWORD}"
  ]
}

# Frontend container
resource "docker_container" "frontend_container" {
  name  = "frontend_app"
  image = data.docker_image.frontend_image.name

  ports {
    internal = 80
    external = 3000
  }
}

# Wait for containers to start
resource "null_resource" "wait_for_containers" {
  depends_on = [docker_container.backend_container, docker_container.frontend_container]

  provisioner "local-exec" {
    command = "powershell -Command Start-Sleep -Seconds 10"
  }
}
