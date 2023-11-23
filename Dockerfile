FROM node:16.10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm run build:main
RUN rm -fr node_modules

# FROM nginx:1.21.0-alpine
# COPY --from=build-stage /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
CMD [ "serve", "-s", "build" ]
