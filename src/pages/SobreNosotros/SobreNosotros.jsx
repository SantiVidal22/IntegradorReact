import React from 'react'
import { ArticleContainerStyled, SectionContainerStyled, StyledH2, StyledP } from './SobreNosotrosStyles'

const SobreNosotros = () => {
  return (
    <ArticleContainerStyled>
        <SectionContainerStyled>
            <StyledH2>BREVE RESEÑA HISTORICA</StyledH2>
            <StyledP>Louis LASSEN, inmigrante alemán, crea en 1895 la primera hamburguesa en EE.UU. En aquel entonces, la inmigración europea partía del puerto de Hamburgo, y Nueva York era uno de los principales destinos. La receta de la hamburguesa como la conocemos se gestó en Alemania, más precisamente en Hamburgo. En Estados Unidos se hizo tan popular que llegó a ser la comida nacional y un emblema. La hamburguesa lleva ya más de un siglo junto a los estadounidenses. El "Louis' Lunch”, como se lo conoce hasta el día de hoy, se originó en un lunch wagon, un restaurante montado en un antiguo vagón de tren que podía ser transportado. Hoy, la propuesta se renueva con los "Pop Up Stores", famosos contenedores sustentables de GOODBURGUER</StyledP>
        </SectionContainerStyled>
    </ArticleContainerStyled>
  )
}

export default SobreNosotros;