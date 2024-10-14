# Stage-1 & specify a name 'builder'
FROM  node:18 AS builder

# Create a directory  and go to the directory 
WORKDIR /app


# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --prefer-offline

# Copy other files to my current directory
COPY . .

# Build and optimize static file
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build

# Stage-2
FROM nginx:1.25.2-alpine-slim

# Copy the static file to my Nginx folder to serve static contain
COPY --from=builder /app/build /usr/share/nginx/html

# Open the port to react
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]