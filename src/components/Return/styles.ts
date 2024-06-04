import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.RED_200};

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  svg {
    font-size: 20px;
    margin-right: 8px;
  }
`;
