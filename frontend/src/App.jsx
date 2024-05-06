import { Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'; 
import ProductList from './productlist'
import Cart from './cart'
import Orderform from './orderForm'
import Nav from './navbar'
import './App.css'

function App() {

  return (<>
    <Nav/>
    <CartProvider>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeOrder' element={<Orderform/>}/>
    </Routes>
    </CartProvider>
    </>
  )
}

export default App
