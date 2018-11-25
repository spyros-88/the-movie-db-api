import express  from "express";
import bodyParser from "body-parser"
import { ApolloServer, gql } from "apollo-server-express"
import schema from "./schema"

const port = 8000;

const server = new ApolloServer(schema);
const app = express();

server.applyMiddleware({ app });
app.use('/graphql', bodyParser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
