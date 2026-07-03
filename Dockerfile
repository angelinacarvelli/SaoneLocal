FROM node:20-alpine AS build-frontend
WORKDIR /app/realfrontend
COPY ./realfrontend/package*.json ./
RUN npm install
COPY ./realfrontend ./
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
COPY --from=build-frontend /app/realfrontend/dist ./realfrontend/dist
EXPOSE 3000
CMD ["node", "backend/src/app.js"]