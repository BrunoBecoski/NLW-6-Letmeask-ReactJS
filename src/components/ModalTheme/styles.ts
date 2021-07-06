import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  padding: 64px 110px;
  background: var(--white-background);


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
    }

    button:first-child {
      background: var(--gray-light);
      color: var(--gray-dark);
    
      &:hover {
        background: var(--hover-grayLight);
      }
    }

    button:last-child {
      background: var(--black);
      color: var(--white-details);


      &:hover {
        background: var(--shadow);
      }
    }
  }
`; 
