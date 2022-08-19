import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import Contactscreen from './Screens/Contactscreen';
import RegisterScreen from './Screens/RegisterScreen';

function App() {
  return (
    <div>
       <BrowserRouter >
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contactscreen" element={<Contactscreen />}/>
        <Route path="/register" element={<RegisterScreen/>} />
        </Routes>
     {/* <HeaderScreen/>
     <FooterScreen/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
