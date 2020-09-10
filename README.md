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

### Available Commands:
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