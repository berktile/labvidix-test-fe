# Use an official Node.js runtime as a base image
FROM node:18.19.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3001

# Define the command to run your app
CMD ["npm", "start"]
