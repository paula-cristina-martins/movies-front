import styled from "styled-components";

interface ContainerProps {
  $isNew: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  
  justify-content: space-between;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding: 0 12px;

  .button {
    color: ${({ theme }) => theme.COLORS.RED_200};
  }

  > button {
    border: none;
    background: none;
  }

  > input {
    width: 100%;
    height: 56px;
    padding: 0 12px 0 8px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
