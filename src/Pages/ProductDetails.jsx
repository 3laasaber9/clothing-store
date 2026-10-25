import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
const { id } = useParams();

const product = products.find((item) => item.id === id);

if (!product) {
return ( <div className="container"> <h1>Product Not Found</h1> <Link to="/">Back to Home</Link> </div>
);
}

return ( <div className="container"> <h1>Product Details</h1>


  <div className="product-details">
    <h2>{product.name}</h2>

    <p>Price: {product.price} EGP</p>

    <p>Color: {product.color}</p>

    <p>Product ID: {product.id}</p>

    <Link to="/">Back to Home</Link>
  </div>
</div>


);
}

export default ProductDetails;
