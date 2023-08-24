import React from 'react'
import { CardPrice, ContainerPrice, ProductsCard, TitleDesc, ContainerTd } from './ProductsStyles'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils/index';
import { addToCart } from '../../redux/cart/cartSlice';

const ProductCard = ({img, title, desc, price, id}) => {

  const dispatch = useDispatch();
  
  return (
    <ProductsCard>
        <img src={img} alt={title} />
        <TitleDesc>
          <ContainerTd>
            <h2>{title}</h2>
            <p>{desc}</p>
          </ContainerTd>
          <ContainerPrice>
            <CardPrice>{formatPrice(price)}</CardPrice>
            <Button onClick={() => dispatch(addToCart({img, title, desc, price, id}))}> 
                Comprar
            </Button>
          </ContainerPrice>
        </TitleDesc>
    </ProductsCard>
  )
}

export default ProductCard