# Node.js бейнесін қолдану
FROM node:18

# Жұмыс каталогын орнату
WORKDIR /app

# package.json және package-lock.json көшіріп, тәуелділіктерді орнату
COPY package*.json ./
RUN npm install

# Барлық файлдарды контейнерге көшіру
COPY . .

# 3000 портын ашу (React үшін)
EXPOSE 3000

# React серверін іске қосу
CMD ["npm", "start"]

# Install dependencies
RUN npm install

# Install Husky hooks
RUN npx husky install
