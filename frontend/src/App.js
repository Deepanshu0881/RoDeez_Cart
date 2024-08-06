import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import television_banner from"./Components/Assets/television_banner.jpg";
import mobile_banner from "./Components/Assets/mobile_banner.jpg";
import laptop_banner from "./Components/Assets/laptop_banner.jpg";
import gadgets_banner2 from "./Components/Assets/gadgets_banner.png";
import LoginSignup from "./Pages/LoginSignup";
export const backend_url = 'https://ro-deez-backend.onrender.com';
// export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mobiles" element={<ShopCategory banner={mobile_banner} category="mobile" />} />
          <Route path="/laptops" element={<ShopCategory banner={laptop_banner} category="laptop" />} />
          <Route path="/televisions" element={<ShopCategory banner={television_banner} category="television" />} />
          <Route path="/gadgets" element={<ShopCategory banner={gadgets_banner2} category="gadget" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
            
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
