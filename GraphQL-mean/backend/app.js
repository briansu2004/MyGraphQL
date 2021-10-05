const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const config = require("./config/config.json");

const app = express();

app.use(bodyParser.json());

app.use(cors());

// graphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

//  `mongodb+srv://${config.user}:${config.password}@cluster0-jtpxd.mongodb.net/${config.dbname}?w=majority`,
mongoose
  .connect(`${config.mongoURI}`, {
    // userUnitfiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => {
    app.listen(3000, console.log("Connected to port 3000"));
  })
  .catch((err) => console.log(err));
