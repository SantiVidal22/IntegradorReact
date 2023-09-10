import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CategoriasWrapper = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 1400px;
   margin: 0 15px;
   @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
   }
`;

export const CategoriasContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   row-gap: 3.5rem;
   column-gap: 3.5rem;
   @media (max-width: 768px){
    gap: 10px;
   }
`;

export const CardCategoria = styled(motion.div)`
   display: flex;
   flex-direction: row;
   justify-content: center;
   text-align: center;
   align-items: center;
   gap: 0.5rem;
   width: 30%;
   height: 9rem;
   border-radius: 15px;
   padding: 5px;
   img{
      width: 30%;
      aspect-ratio: auto;
   }
   background-color: var(--yellow-bg);
   cursor: pointer;
   h2{
    font-size: 1rem;
   }
   @media (max-width: 768px){
    flex-direction: column;
    width: 50%;
   }
`;