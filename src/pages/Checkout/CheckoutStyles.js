import styled from "styled-components";

export const CheckoutContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px 40px;
  background: var(--color-1);
  align-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 95%;
    gap: 40px;
    padding: 20px 2px;
    align-items: center;
  }
`;
