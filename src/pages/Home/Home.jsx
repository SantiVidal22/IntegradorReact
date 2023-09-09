import React, { useRef } from 'react';
import Categorias from '../../components/Categories/Categories';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import Recomendados from '../../components/Recomendados/Recomendados';

import { HomeWrapper } from './HomeStyles';

function Home() {
  const productsRef = useRef();


  return (
    <HomeWrapper>
      {/* Hero Section */}
      <Hero/>
   
      {/* Recomendados Section */}
      <Recomendados/>

      {/* Categorias Section */}
      <section>
        <h2>Categorias</h2>
        <Categorias />
      </section>

      {/* Productos Section*/}
      <section ref={productsRef} >
        <h2>Nuestros productos</h2>
        <Products />
      </section>
    </HomeWrapper>
  );
}

export default Home
