import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }
`;

export const Form = styled.form`
  max-width: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;

  input {
    margin-right: 10px;
    width: 50%;
  }
`;

export const Posts = styled.div`
  .noposts {
    text-align: center;
    p {
      margin-bottom: 1.5em;
    }
    a {
      padding: 10px 25px;
    }
  }
`;

export const Button = styled(Link)`
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
