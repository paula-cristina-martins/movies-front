import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: block;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: none;
  border-radius: 10px;
  padding: 32px;
  margin-bottom: 24px;

  > div {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.COLORS.RED_200};
    font-size: 16px;

    > h1 {
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > p {
    text-align: justify;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 16px;
  }
`;
