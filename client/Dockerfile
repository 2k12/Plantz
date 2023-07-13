FROM node:18.14.0

WORKDIR /app/client

# Copia los archivos de package.json y package-lock.json
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Compila la aplicación
CMD ["npm","run","dev"]

