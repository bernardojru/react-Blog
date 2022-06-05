import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
  }

  p {
    color: #aaa;
    margin-bottom: 1em;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  width: 80vw;
  padding: 10px;
`;

export const PostRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  width: 80vw;
  padding: 10px;
  flex-wrap: wrap;

  p {
    color: #000;
  }

  button,
  a {
    margin: 0 5px;
    height: 30px;
    width: 100px;
    font-size: 0.7em;
  }
  a {
    border: 1px solid;
    padding: 7px 30px;
    text-align: center;
    font-weight: bold;

    :hover {
        color: white;
        background-color: #000;
    }
  }
  button {
    padding: 7px 30px;
    text-align: center;
    font-weight: bold;
    border: 1px solid;
    cursor: pointer;

    :hover {
        background-color: pink;
        border: none;
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
