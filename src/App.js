import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Contactscreen from "./Screens/Contactscreen";
import RegisterScreen from "./Screens/RegisterScreen";
import RegisterStep2 from "./Screens/RegisterStep2";
import RegisterStep3 from "./Screens/RegisterStep3";
import { useSelector } from "react-redux";
import CommercePlatform from "./Screens/CommercePlatform";
import ProductInformation from "./Screens/ProductInformation";
import Offers from "./Screens/Offers";
import OrderManagement from "./Screens/OrderManagement";
import Marketplace from "./Screens/Marketplace";
import AboutScreen from './Screens/AboutScreen'
import PricingScreen from "./Screens/PricingScreen";
import Contact3 from "./Screens/Contact3";
import Register1 from "./Screens/Register1"
import Register2 from "./Screens/Register2";
import Register3 from "./Screens/Register3";


function App() {
  const sellerDetails = useSelector((state) => state.sellerRegister);
  const { sellerInfo, loading, error } = sellerDetails;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contactscreen" element={<Contactscreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/register-step-2" element={<RegisterStep2 />} />
          <Route path="/register-step-3" element={<RegisterStep3 sellerInfo={sellerInfo} />}  />
          <Route path="/commerce" element={<CommercePlatform />} />
          <Route path="/pim" element={<ProductInformation />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/ordermanagement" element={<OrderManagement/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/pricing" element={<PricingScreen/>} />
          <Route path="/contact3" element={<Contact3/>} />
          <Route path="/register1" element={<Register1/>} />
          <Route path="/register2" element={<Register2/>} />
          <Route path="/register3" element={<Register3/>} />
        </Routes> 
        {/* <HeaderScreen/>
     <FooterScreen/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
