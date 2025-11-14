# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

# Stage 2: Create the production image
FROM node:20-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/package.json ./package.json

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port the app runs on
EXPOSE 3000

CMD ["node", "dist/server.js"]