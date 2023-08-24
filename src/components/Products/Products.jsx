import React from 'react'
import { ButtonContainerStyled, ProductsContainer, ProductsWrapper } from './ProductsStyles'
import ProductCard from './ProductCard'
import Button from '../UI/Button/Button'
import { INITIAL_LIMIT } from '../../utils/constants'
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Products = () => {
  let Products = useSelector(state => state.Products.products)
  const [limit, setLimit] = useState(INITIAL_LIMIT)
  const totalProducts = useSelector((state) => state.Products.totalProducts)
  const selectedCategory = useSelector(state => state.categories.selectedCategory)
  

  if(selectedCategory) {
    Products = {
      [selectedCategory]: Products[selectedCategory],
    };
  };



  return (
    <>
     <ProductsWrapper>
      <ProductsContainer>
        {Object.entries(Products).map(([,ArrayProducts]) => {
            return ArrayProducts.map((Product) => {
              if (limit >= Product.id || selectedCategory){
                return <ProductCard {...Product} key={Product.id} />
              }
              return null
              
            })
          })}
      </ProductsContainer>
      {
        !selectedCategory && (
          <ButtonContainerStyled>
        <Button
          onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
          secondary='true'
          disabled={INITIAL_LIMIT === limit}
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={() =>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} disabled={totalProducts <= limit}>
          Ver más
        </Button>
      </ButtonContainerStyled>
        )
      }
     </ProductsWrapper>
    </>
  )
}

export default Products