import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

function App() {
return ( <Routes>
<Route path="/" element={<Home />} />


  <Route
    path="/products/:id"
    element={<ProductDetails />}
  />
</Routes>


);
}

export default App;
