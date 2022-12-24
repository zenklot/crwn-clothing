import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const FormContainer = styled.form`
  min-width: 500px;
  height: 100px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
