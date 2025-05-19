import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  padding: 0.8rem;
  border-radius: 0.6rem;
  border: 1px solid black;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === "delete" &&
    css`
      background-color: lightgray;
      color: red;
    `}

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
