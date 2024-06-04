import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  justify-content: space-between;
  padding: 0 120px;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`;

export const Search = styled.div`
  width: 70%;
  padding: 24px 16px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    line-height: 24px;
    flex-direction: column;
    margin-right: 14px;
    align-items: end;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }


    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;
    }
  }
`;
