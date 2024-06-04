import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;

  aside {
    padding: 20px 0 0 120px;
    margin-bottom: 12px;
    button {
      background: none;
      border: none;
    }
  }

  main {
    overflow-y: scroll;
    padding: 0 120px;
  }
`;

export const Form = styled.form`
  h1 {
    margin: 24px 0 40px;
  }

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 24px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 40px;
  }

  span {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    padding: 16px 20px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .options {
    width: 100%;
    margin: 20px 0;
  }

  .options .delete {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    color: ${({ theme }) => theme.COLORS.RED_200};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
