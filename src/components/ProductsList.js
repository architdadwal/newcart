import dummyProducts from "./Dummy";

const ProductsList = (addToCart) => {
  return (
    <div>
      <ul>
        {dummyProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
