import styled from "styled-components";

interface ContainerProps {
  $active?: string;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 56px;
  border: none;
  font-size: 16px;
`;
