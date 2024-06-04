import styled from "styled-components";

export const Container = styled.div`
  .title {
    display: flex;
    align-items: center;
    padding: 12px 0;

    span {
      color: ${({ theme }) => theme.COLORS.RED_200};
      font-size: 24px;
      margin: 4px 0 0 16px;
    }
  }

  .details {
    display: flex;
    align-items: center;

    img {
      border-radius: 100%;
      width: 32px;
      height: 32px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.RED_200};
      font-size: 20px;
    }

    button {
      background: none;
      border: none;
    }

    p {
      padding: 0 12px;
    }
  }

  .tags {
    padding: 40px 0;
  }

  .movie {
    text-align: justify;
    line-height: 28px;
  }
`;
