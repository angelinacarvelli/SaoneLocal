FROM nginx:alpine
COPY ./frontend/pages/Accueil.html /usr/share/nginx/html/
EXPOSE 80