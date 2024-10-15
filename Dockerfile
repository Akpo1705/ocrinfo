# Stage 1: Build the application
FROM node:20 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration and certificates
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./certs /etc/nginx/certs

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
