FROM nginx:alpine
COPY ./realfrontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx"]