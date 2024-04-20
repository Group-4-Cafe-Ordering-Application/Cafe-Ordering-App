# Node.js base image for building the React app
FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Set up the production environment
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/server.js /app/server.js
COPY --from=builder /app/package*.json /app/
RUN npm install express
EXPOSE 8080
CMD ["node", "server.js"]
