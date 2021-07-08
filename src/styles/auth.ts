import styled from 'styled-components';

export const Container =  styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  @media (max-width: 720px) {
    display: none;
  }

  flex: 7;

  background: var(--primary);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: var(--gray);
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;    

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > svg {
      align-self: center;
      .letme {
        fill: var(--color)
      }
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px 0;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 14px;
      color: var(--color_50);
      margin-top: 16px;

      a {
        color:var(--primary);
      }
    }
  }
`;

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: var(--color_15);
    border: 1px solid var(--color_50);  

    color: var(--color);

    &:focus {
      outline: none;
      border: 2px solid var(--primary);
    }
  }

  button {
    margin-top: 16px;
  }

  button, input { 
    width: 100%;
  }
`;

export const CreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: var(--color_50);

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color_50);
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color_50);
    margin-left: 16px;
  }
`;