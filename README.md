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


## Knex
We are using [knex.js](http://knexjs.org) to interface with the DB.  It provides an API for building schemas and queries 
independent of DB client.

It's configuration lives in `server/db/knexfile.js`.

### Commands
#### Initialize database tables with data:
```bash
npm run init-db
```

#### Reset data:
```bash
npm run clear-db
```

## GraphQL
We are using [grahpql](https://graphql.org/) as the API between the front-end (React) client and back-end (express) 
server.

On the server side, we are using [express-graphql](https://github.com/graphql/express-graphql) to serve the graphQL API
over express.  The graphql endpoint is http://localhost:4000/graphql, which shows the GraphiQL UI tool when opened in 
the browser.  

Our graphql type definitions and resolvers live in `server/graphql`.

On the client side, we are using [Apollo Client](https://www.apollographql.com/docs/react/) to connect our React 
components to a graphql client and make API queries.

## Testing
### Client-Side
`create-react-app` uses the [jest](https://jestjs.io/) testing framework by default and provides a script to execute 
tests.  To test the React components, we are using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
To mock out our graphql API, we are using Apollo Client's [MockedProvider](https://www.apollographql.com/docs/react/development-testing/testing).
 

#### Commands
##### Run tests
```bash
cd app && npm test
``` 

### Server-Side
We are also using the jest framework on the server side.

#### Testing Examples
##### Repository Tests
The db repository provides functions to use for data access (e.g. get, add, delete).  This repository has a knex (read: DB)
dependency.  Our test double on the database side is an in-memory sqlite3 DB, which we "connect" to via knex, and seed 
with test data (fixtures). sqlite3 is not a great stand-in for postgres, so there are some limitations here that we are living with for now
(e.g. it doesn't return values on insert).  An alternative would be to spin up a postgres docker container.

#### Commands
##### Run tests
```bash
cd server && npm test
```