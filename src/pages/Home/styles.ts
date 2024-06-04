import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 120px 0px;

  > h1 {
    font-size: 32px;
    font-weight: 400;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;
  font-size: 18px;

  svg {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  padding: 48px 120px 0px;
  margin-top: 16px;
  overflow-y: scroll;
`;
