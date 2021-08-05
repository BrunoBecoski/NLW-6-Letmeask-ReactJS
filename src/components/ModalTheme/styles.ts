import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  border-radius: 8px;
  background: var(--background);

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .closeButton {
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
        stroke-width: 8px;
      }
      border: 3px solid var(--danger_hover);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 100px 48px;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
    }
  }
`; 

export const ThemeSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  .light {
    color: var(--black);
    background: var(--white);
  }
  
  .dark {
    color: var(--white);
    background: var(--black);
  } 

  label {
    /* border-radius: 8px; */
    padding: 15px 32px;
    cursor: pointer;
    border: 3px solid var(--background);

    position: relative;

    input {
      margin-right: 15px;
    }

    .checkmark {
      position: absolute;
      content: '';

      top: 0;
      left: 0;
      border-radius: 8px;

      width: 100%;
      height: 100%;
      z-index: 10;

      box-shadow: 0 5px 1px gray;
    
    
      &:after {
        content: '';
        width: 100%;
        height: 5px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background: var(--white);
        position: absolute;
        top: -5px;
      }


      &:before {
        content: '';
        width: 100%;
        height: 3px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background: var(--gray);
        position: absolute;
        top: 50px;
      }
    }
    
    &:hover {
      color: var(--primary);
      border: 3px solid var(--primary);
    }
  }

  label.light .checkmark:after {
    background: var(--white);
  }

  label.dark .checkmark:after {
    background: var(--black);
  }

  label.light input:checked ~ .checkmark:after,
  label.dark input:checked ~ .checkmark:after {
    background: var(--background);
  }

  label.light input:checked ~ .checkmark:before {  
    background: var(--white);
  }

  label.dark input:checked ~ .checkmark:before {
    background: var(--black);
  }

`;

export const ColorSelector = styled.div`
  margin-top: 24px;
  width: 75%;
  height: 42px;

  display: flex;
  justify-content: space-evenly;

  label {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
  }

  .checkmark {
    position: absolute;
    margin: 4px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  label.purple .checkmark {
    background-color: #835AFD;
  }

  label.red .checkmark {
    background-color: #CD5C5C;
  }

  label.green .checkmark {
    background-color: #2E8B57;
  }

  label.blue .checkmark {
    background-color: #4169E1;
  }

  label input:checked ~ .checkmark:after {
    display: block;
  }

  label .checkmark:after {
    top: -6px;
    left: -6px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 4px solid var(--primary);
  } 
`; 