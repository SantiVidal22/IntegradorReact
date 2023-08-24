import { styled } from "styled-components";

export const FooterContainerStyled = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   align-items: center;
   padding: 7rem 0 0 0;
   background-color: #262626;
   p span{
    font-weight: 800;
   }
`;

export const LinksContainerStyled = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   img{
      width: 8%;
   }
   gap: 1rem;
   margin-bottom: 2rem;
   @media (max-width: 768px) {
    flex-direction: column;
    a {
        padding: 0.5rem 0;
    }
   }
`;

export const SocialStyled = styled.div`
   display: flex;
   gap: 1rem;
`
export const DesignedStyled = styled.div`
   width: 100%;
   background-color: #1e1e1e;
   text-align: center;
`