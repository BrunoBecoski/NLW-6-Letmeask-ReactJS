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
  }
`; 

export const Color = styled.div`
  width: 75%;
  height: 30px;
  justify-content: space-evenly;
  
  label {
    position: relative;
    cursor: pointer;
    
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
  }

  .checkmark {
    position: absolute;
    left: -10px;
    height: 20px;
    width: 20px;
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
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 3px solid var(--primary);
  } 
`; 