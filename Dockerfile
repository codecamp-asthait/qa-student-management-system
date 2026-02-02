FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm ci --only=production || npm install --only=production

COPY . .

EXPOSE 5170

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "app.js"]