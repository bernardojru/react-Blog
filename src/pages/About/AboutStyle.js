import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutConst = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #aaa;
    margin-bottom: 2em;
  }
`;

export const Button = styled(Link)`
  display: block;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #0f730c;
  color: #fff;
  padding: 7px 30px;
  border-radius: 5px;
`;
