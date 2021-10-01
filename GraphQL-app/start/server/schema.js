const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type MainCard {
    title: String
    image: String
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    category: Category
    slug: String
  }

  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean
      category: String
      slug: String
    ): Animal
    removeAnimal(id: ID!): Boolean
    # updateAnimal(
    #   id: ID!
    #   image: String
    #   title: String
    #   rating: Float
    #   price: String
    #   description: [String!]
    #   stock: Int
    #   onSale: Boolean
    #   category: String
    #   slug: String
    # ): Animal
  }
`;

module.exports = { typeDefs };
