import { styled } from "styled-components";

export const CardRecomendadoss = styled.div`
   background: var(--gray-bg);
   width: 300px;
   height: 450px;
   border-radius: 18px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 1rem;
   justify-content: space-around;
   img{
    width: 100%;
    height: 70%;
    margin-bottom: 1rem;
    object-fit: contain;
    aspect-ratio: auto;
   }
   h2{
    font-weight: 400;
    color: white;
    margin: 0;
   }
   p{
    color: #666;
    font-size: 1.2rem;
   }
   @media (max-width: 768px) {
    width: 200px;
    text-align: left;
   }
`;
export const RecomendadosInf = styled.div`
   display: flex;
   gap: 8px;
   justify-content: space-evenly;
   @media (max-width: 768px){
    flex-direction: column;
   }
`; 
export const ContainerTD = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`
export const ContainerPrice = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`

export const CardPrice = styled.span`
   font-weight: 800;
   font-size: 1.70rem;
   background: linear-gradient(to right, #f46b45, #eea849);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
export const RecomendadosWrapper = styled.section`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
`;
export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const TitleContainerStyled = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-align: left;
  width: 100%;
`;
export const ContainerRecomendados = styled.div`
  width: 100%;
  /* background: blue; */
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

