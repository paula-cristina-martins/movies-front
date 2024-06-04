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
    padding: 0 120px 0;
  }
`;
