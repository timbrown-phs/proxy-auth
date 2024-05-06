FROM node:20-slim
ENV auth_url=https://auth.predictivehealthsolutions.co
ENV auth_api_key=b62cc0767b4c82a66ed82ad941b14f19499b84384d14d16952420c70f35ea597b0eef010882f4a657a73090b563a4bcd
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER root
COPY package*.json ./
COPY proxy ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 8000
CMD [ "node", "proxy.mjs" ]


