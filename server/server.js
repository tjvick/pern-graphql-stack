const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {schema} = require("./graphql/index");
var cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});