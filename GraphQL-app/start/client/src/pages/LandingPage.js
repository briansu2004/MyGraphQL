import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, useMutation, gql } from "@apollo/client";

const ANIMALS_QUERY = gql`
  query {
    animals {
      image
      id
      price
      image
      title
      slug
    }
  }
`;

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $addAnimalImage: String!
    $addAnimalTitle: String!
    $addAnimalPrice: String!
    $addAnimalDescription: [String!]!
    $addAnimalStock: Int!
    $addAnimalCategory: String!
    $addAnimalRating: Float
    $addAnimalSlug: String
  ) {
    addAnimal(
      image: $addAnimalImage
      title: $addAnimalTitle
      price: $addAnimalPrice
      description: $addAnimalDescription
      stock: $addAnimalStock
      category: $addAnimalCategory
      rating: $addAnimalRating
      slug: $addAnimalSlug
    ) {
      id
      image
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMALS_QUERY);
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Some errors happened.</div>;
  }

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
      <button
        onClick={() => {
          addAnimal({
            variables: {
              addAnimalImage: "ostrich",
              addAnimalTitle: "This is a really cool ostrich",
              addAnimalPrice: "9768.99",
              addAnimalDescription: "Nice",
              addAnimalStock: 100,
              addAnimalCategory: "1",
              addAnimalRating: 4.3,
              addAnimalSlug: "mammals",
            },
          });
        }}
      >
        Add an Ostrich
      </button>
    </div>
  );
}

export default LandingPage;
