FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]

# Install dependencies
RUN npm install

# Install Husky hooks
RUN npx husky install
