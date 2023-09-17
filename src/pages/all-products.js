import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";

const AllProducts = ({ data, addToCart }) => {
  // filter variables
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  // pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const products = data.allProductsJson.nodes;

  const filteredProducts = products.filter(
    (product) =>
      (!selectedColor || product.color === selectedColor) &&
      (!selectedBrand || product.brand === selectedBrand)
  );

  const paginate = (array, pageNumber, itemsPerPage) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(filteredProducts.length / itemsPerPage)) {
      return;
    }
    setCurrentPage(newPage);
  };

  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <h1>All Products</h1>
      <div>
        <label htmlFor="color-filter">Color:</label>
        <select id="color-filter" value={selectedColor} onChange={handleColorChange}>
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          {/* Add more colors as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="brand-filter">Brand:</label>
        <select id="brand-filter" value={selectedBrand} onChange={handleBrandChange}>
          <option value="">All</option>
          <option value="BrandA">BrandA</option>
          <option value="BrandB">BrandB</option>
                   {/* Add more brands as needed */}
        </select>
      </div>

      {paginate(filteredProducts, currentPage, itemsPerPage).map((product) => (
        <div key={product.id}>
          <div key={product.id}>
            <h2>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>&laquo; Previous</button>
        <span>
          {" "}
          Page {currentPage} of {Math.ceil(filteredProducts.length / itemsPerPage)}{" "}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next &raquo;</button>
      </div>
      {/*<Cart />*/}
    </div>
  );
};

export const query = graphql`
  {
    allProductsJson {
      nodes {
        id
        title
        description
        price
        color
        brand
      }
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(null, mapDispatchToProps)(AllProducts);

