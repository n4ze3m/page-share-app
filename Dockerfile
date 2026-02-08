ARG NODE_VERSION=20.18.0

FROM node:20.18.0-slim as base

WORKDIR /app

FROM base as build

ENV NODE_ENV="development"

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package-lock.json package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base

ENV NODE_ENV="production"

RUN apt-get update -y && apt-get install -y openssl && apt-get clean


COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "run", "start"]
