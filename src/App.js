import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Navbar from './Components/Navbar/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
