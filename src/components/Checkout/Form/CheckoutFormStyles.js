import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
