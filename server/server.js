const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require("./graphql/index");
const cors = require('cors');
const Knex = require('knex');
const knexConfig = require('./db/knexfile');
const {Repository} = require("./db/repository/repository");

const knexClient = Knex(knexConfig.development);
const repository = new Repository(knexClient);

const app = express();
const port = 4000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(repository),
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});