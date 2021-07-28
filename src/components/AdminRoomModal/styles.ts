import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  border-radius: 8px;
  background: var(--background);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  > button {
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid var(--color_50);
    border-radius: 50%;

    width: 30px; 
    height: 30px;
    background: transparent;


    &:hover {
      path {
        stroke: var(--danger_hover);
      }
      border-color: var(--danger_hover);
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 110px 64px;
    
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
          background: var(--danger_hover);
        }
      }
    }
  }
`; 
