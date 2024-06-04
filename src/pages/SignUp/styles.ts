import styled from "styled-components";
import backgroundImage from "../../assets/bgImage.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > a {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.RED_200};

    svg {
      font-size: 28px;
      margin-right: 4px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;
