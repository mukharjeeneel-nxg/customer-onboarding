import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import Contactscreen from './Screens/Contactscreen';
import RegisterScreen from './Screens/RegisterScreen';
import RegisterStep2 from './Screens/RegisterStep2';
import RegisterStep3 from './Screens/RegisterStep3';
import { useSelector } from 'react-redux';

function App() {

  const sellerDetails = useSelector((state) => state.sellerRegister);
  const { sellerInfo, loading, error } = sellerDetails;
  return (
    <div>
       <BrowserRouter >
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contactscreen" element={<Contactscreen />}/>
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="register-step-2" element={<RegisterStep2 />} />
        <Route path="register-step-3" element={<RegisterStep3 sellerInfo={sellerInfo}/>} />
        </Routes>
     {/* <HeaderScreen/>
     <FooterScreen/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
