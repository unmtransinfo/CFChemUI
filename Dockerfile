FROM node:18-alpine
ARG ASSET_ROOT='\/cfhem'
ENV ASSET_ROOT=$ASSET_ROOT
WORKDIR /app
COPY . .
RUN sed -i -r "s/ASSET_ROOT/$ASSET_ROOT/" index.html
RUN npm install
EXPOSE 5000:5000

CMD ["npm", "run", "dev"]
