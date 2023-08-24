import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Resumen from '../pages/Resumen/Resumen';
import Register from '../pages/Register/Register';
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes';
import Checkout from '../pages/Checkout/Checkout';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Products from '../components/Products/Products';
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros';
import ProfileForm from '../components/ProfileForm/ProfileForm'

function Routes() {
    return (
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mis-ordenes' element={<MisOrdenes />} />
        <Route path='/felicitaciones' element={<Felicitaciones />} />
        <Route path='/resumen/:orderId' element={<Resumen />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sobrenosotros' element={<SobreNosotros/>} />
        <Route path='/profileform' element={<ProfileForm/>} />

        
        <Route
          path='/checkout'
          element={
            <ProtectedRoute redirectTo='/register'>
              <Checkout />
            </ProtectedRoute>
          }
        />
  
      </ReactDomRoutes>
    );
  }
  
  export default Routes;