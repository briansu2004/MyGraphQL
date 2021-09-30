const { argsToArgsConfig } = require("graphql/type/definition");
const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => {
      return animal.id === id;
    });

    animals.splice(index, 1);

    return true;
  },

  //   updateAnimal: (
  //     parent,
  //     { image, title, rating, price, description, stock, onSale, category },
  //     { animals }
  //   ) => {
  //     let newAnimal = {
  //       id: v4(),
  //       image,
  //       title,
  //       rating,
  //       price,
  //       description,
  //       stock,
  //       onSale,
  //       category,
  //     };
  //     animals.push(newAnimal);
  //     return newAnimal;
  //   },
};

module.exports = { Mutation };

// type Animal {
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     stock: Int!
//     onSale: Boolean
//     category: Category
//   }
