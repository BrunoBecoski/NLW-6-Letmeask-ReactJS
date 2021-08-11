import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  border-radius: 8px;
  background: var(--background);
  display: flex;
  flex-direction: column;
  position: relative;

  .closeButton {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
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
    padding: 64px 110px; 

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
    }
  }
`; 

export const ThemeSelector = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;

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
      box-shadow: 0 5px 0 1px var(--primary);
    
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        left: 10px;
      }
      
      &:after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        left: 12px;
        border: 2px solid transparent;
      }
    }
    
    &.light .checkmark {
      color: var(--black);
      background: var(--white);
      &:before {
        background: var(--black);
      }
      &:after {
        background: var(--white);
      }
    }
    
    &.dark .checkmark {
      color: var(--white);
      background: var(--black);
      &:before {
        background: var(--white);
      }
      &:after {
        background: var(--black);
      }
    } 

    &:hover .checkmark {
      font-weight: bold;
      color: var(--primary);
      &:before {
        background: var(--primary);
      }
    }
  }

  .checkmark {
    transition: transform .3s, box-shadow .3s;
  }

  input:checked ~ .checkmark {
    font-weight: bold;
    color: var(--primary);
    border: 3px solid var(--primary);
    transform: translateY(5px);
    box-shadow: none;
  }

  .light input:checked ~ .checkmark {
    &:after {
      background: var(--primary);
      border-color: var(--white);
      left: 12px;
    }
    &:before {
      background: var(--primary);
    }
  }

  .dark input:checked ~ .checkmark {
    &:after{
      background: var(--primary);
      border-color: var(--black);
      left: 12px;
    }
    &:before {
      background: var(--primary);
    }
  }
`;

export const ColorSelector = styled.div`
  margin-top: 32px;
  width: 75%;

  gap: 24px;

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
    height: 35px;
    width: 35px;
    border-radius: 50%;
    box-shadow: 0 5px 0 1px #835AFD40;

    &:after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      border: 3px solid var(--background);
      background: var(--background);
    }
  }

  .purple .checkmark {
    background-color: #835AFD;
    box-shadow: 0 5px 0 1px #835AFDBF;
  }

  .red .checkmark {
    background-color: #CD5C5C;
    box-shadow: 0 5px 0 1px #CD5C5CBF;
  }

  .green .checkmark {
    background-color: #2E8B57;
    box-shadow: 0 5px 0 1px #2E8B57BF;
  }

  .blue .checkmark {
    background-color: #4169E1;
    box-shadow: 0 5px 0 1px #4169E1BF;
  }

  .checkmark {
    transition: transform .3s, box-shadow .3s;
  }

  input:checked ~ .checkmark {
    transform: translateY(5px);
    box-shadow: none;
    &:after {
      background: var(--primary);
    }
  }
`; 