import React from 'react'
import { CategoriasContainer, CategoriasWrapper } from './CategoriesStyles'
import Category from './Category'
import { useSelector } from 'react-redux';

const Categorias = () => {

  const categories = useSelector(state => state.categories.categories)

  return (
    <CategoriasWrapper>
        <CategoriasContainer>
            {
                categories.map((category) => {
                    return <Category {...category} key={category.id}/>
                })
            }
        </CategoriasContainer>
    </CategoriasWrapper>
  );
};

export default Categorias