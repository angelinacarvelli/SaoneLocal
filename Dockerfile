FROM nginx:alpine
COPY ./frontend/page.accueil/ /usr/share/nginx/html/
EXPOSE 80