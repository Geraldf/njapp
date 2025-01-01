# Example Dockerfile for a Next.js app
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
RUN apk add --no-cache git
RUN npm install -g pnpm
# Install dependencies
RUN pnpm install 

# Copy the rest of the project files
COPY .next .next

# Build the app
# RUN pnpm build

# Start the app
CMD ["pnpm", "start"]