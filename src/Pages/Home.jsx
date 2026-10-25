import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
return ( <div className="container"> <h1>Clothing Store</h1>


  <p>Choose your favorite clothes!</p>

  <div className="products-container">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
</div>

);
}

export default Home;
