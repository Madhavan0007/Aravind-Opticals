
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Login from './Pages/Login/Login';
import AddProducts from './Pages/AddProducts/AddProducts';

const isAuthenticated = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    return loggedIn === 'true';
  };

const PrivateRoute = ({ element, ...rest }) => {
return isAuthenticated() ? element : <Navigate to="/login" />;
};

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
                <Route path='/login' element={<Login/>}/>
                <Route path='/add-product' element={<PrivateRoute element={<AddProducts />} />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
);
}

export default App;
