import React from 'react'
import { CardCategoria, ImgStyled } from './CategoriesStyles'
import { selectCategory } from '../../redux/categories/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Category = ({img, title, category}) => {

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <CardCategoria 
    selected={category === selectedCategory} 
    onClick={() => dispatch(selectCategory(category))}
    whileTap={{scale:0.95}}
    >
        <ImgStyled src={img} alt={category}/>
        <h2>{title}</h2>
    </CardCategoria>
  )
}

export default Category