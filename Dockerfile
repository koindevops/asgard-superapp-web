#stage 1
FROM node:12.4.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/
RUN npm install --silent
RUN npm config set unsafe-perm true
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build
#stage2
FROM nginx:alpine
COPY --from=build ./app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN apk --update add ca-certificates
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]