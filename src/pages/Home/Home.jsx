import React, { useRef } from 'react';
import Categorias from '../../components/Categories/Categories';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import Recomendados from '../../components/Recomendados/Recomendados';

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
} from './HomeStyles';

function Home() {
  const productsRef = useRef();


  return (
    <HomeWrapper>
      {/* Hero Section */}
      <Hero/>
   

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

      <Recomendados/>

      {/* Populares Section*/}
      <ProductosWrapper ref={productsRef} >
        <h2>Nuestros productos</h2>
        <Products />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home
