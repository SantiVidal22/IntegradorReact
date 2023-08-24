import React from 'react'
import CardRecomendados  from "./CardRecomendados";
import { useSelector } from "react-redux";
import { RecomendadosWrapper, ContainerStyled, TitleContainerStyled, ContainerRecomendados } from './RecomendadosStyles';

const Recomendados = () => {
  let recomendados = useSelector(state => state.Recomendados.recomendados)
  return (
    <RecomendadosWrapper>
      <ContainerStyled>
        <TitleContainerStyled>Hoy te recomendamos</TitleContainerStyled>
        <ContainerRecomendados>
          {recomendados.map((recomendado) => {
            return <CardRecomendados {...recomendado} key={recomendado.id} />;
          })}
        </ContainerRecomendados>
      </ContainerStyled>
    </RecomendadosWrapper>
  );
};

export default Recomendados;