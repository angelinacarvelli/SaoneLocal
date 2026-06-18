FROM nginx:alpine
COPY ./React /usr/share/nginx/html/
EXPOSE 80