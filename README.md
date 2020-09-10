# pern-graphql-stack

Demo application exhibiting the following stack:
- PostgreSQL
- express
- React
- node.js
- GraphQL
- knex.js

Also includes: 
- Docker (for containerizing)
- Jest (for unit testing)
- Cypress (for end-to-end testing)


## React
We are using React to provide a reactive web interface.

React application was installed using [create-react-app](https://github.com/facebook/create-react-app).
It lives inside the `app/` directory. 

### Commands
#### Install node dependencies:
```bash
cd app && npm install
```

#### Build client:
```bash
cd app && npm run build
```
Builds application into `build/` directory.

Run client:
```bash
cd app && npm start
```
Serves application at http://localhost:3000 with hot reload.


## Express
We are using express to serve our backend "API".  It lives inside the `server/ ` directory.

A simple express server was created by following [Express' Hello world example](https://expressjs.com/en/starter/hello-world.html). 

### Commands
#### Install node dependencies:
```bash
cd server && npm install
```

#### Run server:
```bash
cd server && npm start
```
The server will run at http://localhost:4000


## PostgreSQL
We are using [postgres' official docker image](https://hub.docker.com/_/022689bf-dfd8-408f-9e1c-19acac32e57b) to run a 
postgres database instance locally.  

The configuration is defined in the `docker-compose.yml` file.  We are using a HOST port of 2345 (instead of default 
5432 to avoid conflicts with other postgres containers you may have up).  Data is persisted to a `pgdata` volume.

### Commands
#### Start postgres container:
```bash
docker-compose up -d
```

#### Stop container:
```bash
docker-compose down
```

#### Delete persisted data
```bash
docker-compose down
docker volume rm pern-graphql-stack_pgdata
```
