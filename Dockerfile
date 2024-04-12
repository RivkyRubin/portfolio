# Stage 1: Build Angular app
FROM node:16.18.0-alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Create Nginx container
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built Angular app to the Nginx web root directory
COPY --from=builder /usr/src/app/dist/personal /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]