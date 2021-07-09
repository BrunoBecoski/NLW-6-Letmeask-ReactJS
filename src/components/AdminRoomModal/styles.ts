import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  padding: 64px 110px;
  background: var(--background);

  svg {
    margin-bottom: 24px;
    width: 48px;
    height: 48px;
  }

  h1 {
    margin-bottom: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    color: var(--color_50);
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
    }

    button:first-child {
      background: var(--color_80);
      color: var(--color_15);
    
      &:hover {
        background: var(--color_50);
      }
    }

    button:last-child {
      background: var(--danger);
      color: var(--white);

      &:hover {
        background: var(--hover-danger);
      }
    }
  }
`; 
