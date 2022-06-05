import styled from "styled-components";

export const Post = styled.div`
  text-align: center;

  h2 {
    font-size: 2.2em;
  }

  p {
    color: #aaa;
    margin-bottom: 2em;
  }
  form {
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    textarea {
      min-width: 400px;
    }
    label {
      font-weight: bold;
      padding: 10px 0px;
      margin-top: 5px;
    }

    input {
      min-width: 400px;
    }
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
