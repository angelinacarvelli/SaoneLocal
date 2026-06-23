FROM nginx:alpine
COPY ./realfrontend /usr/share/nginx/html/
EXPOSE 80