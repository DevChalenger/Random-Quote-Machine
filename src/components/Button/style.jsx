import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1em;
  background-color: ${({ theme }) => theme};
  color: white;
  border: none;
  border-radius: 0.2em;
  transition: background-color 1s;
`;

export const StyledButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  width: 20px;
`;

export const StyledButtonLink = styled.div`
  display: flex;
  gap: 1em;
`;
