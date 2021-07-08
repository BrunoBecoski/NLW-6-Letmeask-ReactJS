import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    height: 150px;
  }

  div {
    width: 284px;
    text-align: center;
    margin-top: 16px;

    h1 { 
      font-size: 18px;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 14px;
      color: var(--color_50);
      margin-top: 8px;
    }
  }
`;