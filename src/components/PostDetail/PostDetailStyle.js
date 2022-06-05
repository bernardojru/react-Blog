import styled from "styled-components";

export const Detail = styled.div`
  margin-bottom: 2em;

  img {
    max-width: 400px;
  }

  h2 {
    margin-bottom: 0.4em;
  }
`;

export const Tag = styled.div`
  margin-bottom: 1.2em;
  display: flex;

  p {
    margin-right: 0.5em;
  }

  span {
    font-weight: bold;
  }
`;

export const CreatedBy = styled.p`
  font-style: italic;
  color: #444;
  font-size: 0.8em;
  margin-bottom: 1em;
`;
