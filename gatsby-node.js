/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const productPageTemplate = require.resolve("./src/templates/product-page.js");

  const result = await graphql(`
    {
      allProductsJson {
        nodes {
          id
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error("Error fetching products");
  }

  const products = result.data.allProductsJson.nodes;

  products.forEach((product) => {
    createPage({
      path: `/products/${product.id}`,
      component: productPageTemplate,
      context: {
        id: product.id,
      },
    });
  });
};

