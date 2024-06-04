# Use uma imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json da raiz
COPY package*.json ./

# Compacte o contexto de build em um arquivo zip
RUN zip -r build_context.zip .

# Copie o arquivo zip para o contêiner
COPY build_context.zip /tmp/

# Descompacte o arquivo zip dentro do contêiner
RUN unzip /tmp/build_context.zip -d /app

# Instale as dependências da raiz
RUN npm install

# Mude para o diretório do site
WORKDIR /app/site

# Copie o package.json e o package-lock.json do site
COPY site/package*.json ./

# Instale as dependências do site
RUN npm install

# Copie todos os arquivos do projeto para o contêiner
COPY . /app

# Construa o projeto
RUN npm run build

# Exponha a porta que a aplicação vai rodar
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "start"]
