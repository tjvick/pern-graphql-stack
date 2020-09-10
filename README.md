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
React application was installed using [create-react-app](https://github.com/facebook/create-react-app).
It lives inside the `app/` directory. 

### Commands
#### Build client:
```bash
cd app && npm run build
```
Builds application into `build/` directory.

Run client:
```bash
cd app && npm start
```
Serves application at `localhost:3000` with hot reload.


## PostgreSQL
We are using [postgres' official docker image](https://hub.docker.com/_/022689bf-dfd8-408f-9e1c-19acac32e57b) to run a 
postgres database instance locally.  

The configuration is defined in the `docker-compose.yml` file.  We are using a HOST port of 2345 (instead of default 
5432 to avoid conflicts with other postgres containers you may have up).  Data is persisted to a `pgdata` volume.

### Commands
#### Start a postgres container:
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
