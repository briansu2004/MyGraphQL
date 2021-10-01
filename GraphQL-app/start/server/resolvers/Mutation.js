const { argsToArgsConfig } = require("graphql/type/definition");
const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, stock, onSale, category, slug },
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
      slug,
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
  //       slug,
  //     };
  //     animals.push(newAnimal);
  //     return newAnimal;
  //   },
};

module.exports = { Mutation };

// mutation(
//   $addAnimalImage: String!
//   $addAnimalTitle: String!
//   $addAnimalPrice: String!
//   $addAnimalDescription: [String!]!
//   $addAnimalStock: Int!
//   $addAnimalCategory: String!
//   $addAnimalRating: Float
//   $addAnimalSlug: String
// ) {
//   addAnimal(
//     image: $addAnimalImage
//     title: $addAnimalTitle
//     price: $addAnimalPrice
//     description: $addAnimalDescription
//     stock: $addAnimalStock
//     category: $addAnimalCategory
//     rating: $addAnimalRating
//     slug: $addAnimalSlug
//   ) {
//     id
//     image
//   }
// }

// {
//   "addAnimalImage": "ostrich",
//   "addAnimalTitle": "This is a really cool ostrich",
//   "addAnimalPrice": "9768.99",
//   "addAnimalDescription": "Nice",
//   "addAnimalStock": 100,
//   "addAnimalCategory": "1",
//   "addAnimalRating": 4.3,
//   "addAnimalSlug": "mammals"
// }
