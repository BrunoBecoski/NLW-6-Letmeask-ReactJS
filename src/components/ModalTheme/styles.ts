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

  .light .checkmark {
    color: var(--black);
    background: var(--white);
  }
  
  .dark .checkmark {
    color: var(--white);
    background: var(--black);
  } 

  label {
    cursor: pointer;

    width: 110px; 
    height: 50px;

    position: relative;

    input {
      position: absolute;
      opacity: 0; 
    }

    .checkmark {
      content: '';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 15px;
      font-size: 18px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;    
      border-radius: 8px;
      box-shadow: 0 5px 0 2px gray;
    
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        left: 10px;

        background: green;
      }

      &:after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        left: 13px;
        border: 2px solid transparent;
      }
    }
    
    &:hover .checkmark{
      font-weight: bold;
      color: var(--primary);
    }
  }

  label.light .checkmark {
    border: 1px solid var(--black);
  }

  label.dark .checkmark {
    border: 1px solid var(--white);
  }
  
  label input:checked ~ .checkmark {
    font-weight: bold;
    color: var(--primary);
    border: 3px solid var(--primary);
    transform: translateY(5px);
    box-shadow: 0 0 0;
  }

  label.light .checkmark:before {
    background: var(--black);
  }

  label.dark .checkmark:before {
    background: var(--white);
  }

  label.light .checkmark:after {
    background: var(--white);
  }

  label.dark .checkmark:after {
    background: var(--black);
  }
  
  label.light input:checked ~ .checkmark:after {
    background: var(--primary);
    border-color: var(--white);
    left: 13px;
  }

  label.dark input:checked ~ .checkmark:after {
    background: var(--primary);
    border-color: var(--black);
    left: 13px;
  }

  label.light input:checked ~ .checkmark {
    text-shadow: 0 1px 0 var(--black);
  }
  label.dark input:checked ~ .checkmark {
    text-shadow: 0 1px 0 var(--white);
  }

  label.light input:checked ~ .checkmark:before,
  label.dark input:checked ~ .checkmark:before {
    background: var(--primary);
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
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    box-shadow: 0 3px 0 2px gray;
    top: -9px;
    left: -9px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid var(--primary);
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
  
  label input:checked ~ .checkmark {
    width: 48px;
    height: 48px;
    top: -7px;
    left: -7px;
  }

  label input:checked ~ .checkmark:after {
    top: -2px;
    left: -2px;
  }
`; 