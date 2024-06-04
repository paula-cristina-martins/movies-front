import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 250px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: none;
  resize: none;

  margin: 40px 0;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
