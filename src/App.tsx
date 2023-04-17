import { Route, Routes } from "react-router-dom";

import AddProduct from "./components/products/add-product";
import Products from "./components/products";
import UpdateProduct from "./components/products/update-product";
function App() {
   return <div className="App">
      <Routes>
         <Route path='/' element={<Products />}/>
         <Route path='/add-product' element={<AddProduct />}/>
         <Route path='/update-product/:id' element={<UpdateProduct />}/>
      </Routes>
   </div>;
}

export default App;
