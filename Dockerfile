FROM nginx:alpine
COPY ./frontend/pages/ /usr/share/nginx/html/
EXPOSE 80