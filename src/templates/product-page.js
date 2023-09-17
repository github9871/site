import React from "react";
import { graphql } from "gatsby";

const ProductPage = ({ data }) => {
  const product = data.productsJson;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      description
      price
    }
  }
`;

export default ProductPage;