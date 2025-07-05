export const ProductInfo = () => {
  let product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
  };
  return (
    <div>
      <h1>ProductInfo</h1>
      <p>Name of product : {product.name}</p>
      <p>Price : {product.price}</p>
      <p>Is Available : {product.availability}</p>
    </div>
  );
};
