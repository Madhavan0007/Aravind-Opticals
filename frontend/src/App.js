
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
function App() {
    
return (
    <div >
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/products' element={<Shop/>}/>
                <Route path='/product/:productId' element={<Product/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
);
}

export default App;
