import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  padding: 64px 110px;
  background: var(--background);

  h1 {
    margin-bottom: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
  }

  > div {
    display: flex;
    gap: 8px;
    margin-top: 40px;

    button {
      border: none;
      font-weight: 500;
      border-radius: 8px;
      padding: 15px 32px;
      cursor: pointer;
      border: 2px solid transparent;

      &:first-child {
        background: var(--white);
        color: var(--black);
      }

      &:last-child {
        background: var(--black);
        color: var(--white);
      }

      &:hover {
        border: 2px solid var(--primary);
        color: var(--primary);
        font-weight: bold;
      }
    }
  }
`; 
