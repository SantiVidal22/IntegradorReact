import { styled } from "styled-components";

export const ProductsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 1300px;
   margin: 0 15px;
   @media (max-width: 768px){
    text-align: center;
   }
`;

export const ProductsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   place-items: center;
   justify-content: center;
   column-gap: 3.5rem;
   row-gap: 3.5rem;
   width: 100%;
   max-width: 1300px;
`;

export const ProductsCard = styled.div`
   background: var(--gray-bg);
   width: 300px;
   height: 460px;
   border-radius: 18px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 1rem;
   justify-content: space-around;
   img{
    width: 100%;
    height: 70%;
    object-fit: contain;
    aspect-ratio: auto;
    margin-bottom: 1rem;
   }
   h2{
    font-weight: 600;
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

export const TitleDesc = styled.div`
   display: flex;
   gap: 8px;
   justify-content: space-evenly;
   @media (max-width: 768px){
    flex-direction: column;
   }
`;

export const ContainerTd = styled.div`
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

export const ButtonContainerStyled = styled.div`
   display: flex;
   justify-content: center;
   gap: 20px;
   margin-top: 3rem;
`;