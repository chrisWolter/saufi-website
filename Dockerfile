FROM node:16 as build-stage

WORKDIR /saufi

COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /saufi
COPY --from=build-stage /saufi/dist /saufi
COPY nginx.conf /etc/nginx/nginx.conf
