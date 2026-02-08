FROM node:22-slim as base

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package-lock.json package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base

RUN apt-get update -y && apt-get install -y openssl && apt-get clean


COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "run", "start"]
