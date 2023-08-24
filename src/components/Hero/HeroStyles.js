import { styled } from "styled-components";

export const HeroContainerStyled = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   max-width: 1300px;
   padding-bottom: 15px;
   margin: 0 auto;
   gap: 50px;
   h1{
    margin-bottom: 2rem;
   }
   @media (max-width: 1000px) {
    flex-direction: column;
   }
`;

export const HeroTextContainerStyled = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-transform: uppercase;
   width: 50%;
   h1{
    font-size: 4rem;
    margin: 10px 0;
   }
   h2{
    font-size: 2.5rem;
    margin: 30px 0;
   }
   @media (max-width: 1000px){
    width: 80%;
    h1{
      font-size: 2rem;
    }
    h2{
      font-size: 1rem;
    }
    align-items: center;
    text-align: center;
   }
`;

export const HeroImageContainerStyled = styled.div`
   display: flex;
   div{
      display: flex;
      justify-content: center;
   }
   img{
    width: 70%;
    padding: 75px;
   }
   @media (max-width: 1000px) {
    display: none;
   }
`;

export const HeroBenefitsContainerStyled = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-evenly;
   margin-top: 20px;
   margin-bottom: 20px;
   flex-direction: row;
`

export const HeroCardStyled = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   svg{
      font-size: 3rem;
   }
`