import { Link } from "react-router-dom";

function ProductCard({ product }) {
return ( <div className="product-card"> <h2>{product.name}</h2>


  <p>Price: {product.price} EGP</p>

  <p>Color: {product.color}</p>

  <Link to={`/products/${product.id}`}>
    View Details
  </Link>
</div>


);
}

export default ProductCard;
