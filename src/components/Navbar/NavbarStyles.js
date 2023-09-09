import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.header`
    height: 100px;
    width: 100%;
    background-color: transparent;
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    @media (max-width: 768px){
      flex-direction: row;
      padding: unset;
   }
   @media (min-width: 769px) and (max-width: 1024px){
      flex-direction: column;
   }
`;

export const TitleStyled = styled.title`
   display: block;
   font-weight: 800;
   font-size: 1.4rem;
   color: white;
`
export const ImgContainerStyled = styled.div`
   display: flex;
`

export const ImgStyled = styled.img`
   width: 50%;
`
export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    a{
        padding: 1rem 1.5rem;
    }
    a:first-child{
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-weight: 600;
    }
`;


export const LinkContainerStyled = styled.div`
   font-size: 1.2rem;
   align-items: center;
   color: #ff9d01;
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
   display: flex;
   color: #ff9d01;
`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
   display: flex;
   @media (max-width: 769px){
    display: none;
   }
`;

export const MenuuContainerStyled = styled(LinkContainerStyled)`
   display: flex;
   @media (max-width: 768px){
    display: none;
   }
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
   display: none;
   cursor: pointer;
   font-size: 2rem;
   @media (max-width: 768px){
    display: flex;
   }
`;

export const UserNavStyled = styled.div`
   gap: 15px;
   cursor: pointer;
   span{
    color: white;
    font-size: 1rem;
    margin-right: 20px;
   }
   @media (max-width: 768px){
    display: none;
   }
`;

export const SpanStyled = styled.span`
   &:hover {
    text-decoration: underline;
   }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;
  
  ${({ isHidden }) =>
   !isHidden &&
   css`
      backdrop-filter: blur(4px);
   `}
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;

