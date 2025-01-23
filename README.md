# Desafio Nginx-Node

## 🔥Como executar o projeto

1. Primeiro você deve criar uma network para que os containers possam se comunicar entre si:

```bash
docker network create app-node-network
```

1. Agora basta executar o comando `docker-compose` para subir os containers:

```bash
docker-compose up -d
```

3. Agora basta acessar a aplicação em seu browser:

```bash
http://localhost:8080
```