import React from 'react'
import { useDispatch } from 'react-redux'
import {CardRecomendadoss, RecomendadosInf, ContainerTD, CardPrice, ContainerPrice,  } from './RecomendadosStyles'
import { formatPrice } from '../../utils/index';
import { addToCart } from '../../redux/cart/cartSlice';
import Button from '../UI/Button/Button'
import { useNavigate } from 'react-router-dom';

const CardRecomendados = ({img, title, desc, price, id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <CardRecomendadoss>
        <img src={img} alt={title} />
        <RecomendadosInf>
            <ContainerTD>
                <h2>{title}</h2>
                <p>{desc}</p>
            </ContainerTD>
            <ContainerPrice>
                <CardPrice>{formatPrice(price)}</CardPrice>
                <Button onClick={() => dispatch(addToCart({img, title, desc, price, id})) & navigate("/Products")} > 
                    Comprar
                </Button>
            </ContainerPrice>
        </RecomendadosInf>

    </CardRecomendadoss>
  )
};

export default CardRecomendados;