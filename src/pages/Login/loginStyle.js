import styled from "styled-components";

export const FormContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  min-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-weight: bold;
    padding: 10px 0px;
    margin-top: 5px;
  }

  input {
    min-width: 400px;
  }
`;

export const Button = styled.button`
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
  margin-top: 1rem;
`;

export const Error = styled.p`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 5px;
  border-radius: 5px;
`;
