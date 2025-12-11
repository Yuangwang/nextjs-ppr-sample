# Use a lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all files from .apphosting into the container
COPY . .

# Set production environment
ENV NODE_ENV=production
ENV NEXT_PRIVATE_MINIMAL_MODE=1
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Run your custom adapter server
CMD ["node", "adapter-server.js"]