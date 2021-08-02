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

type ThemeSelectorProps = {
  isDefaultTheme: boolean;
 }

export const ThemeSelector = styled.div<ThemeSelectorProps>`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  button {
    border: none;
    font-weight: 500;
    border-radius: 8px;
    padding: 15px 32px;
    cursor: pointer;

    &:first-child {
      background: var(--white);
      color: ${props => props.isDefaultTheme ? 'var(--primary)' : 'var(--black)'};
      border: 3px solid ${props => props.isDefaultTheme ? 'var(--primary)' : ''};
      font-weight: ${props => props.isDefaultTheme ? 'bold' : ''};
    }
    
    &:last-child {
      background: var(--black);
      color: ${props => props.isDefaultTheme ? 'var(--white)' : 'var(--primary)'};
      border: 3px solid ${props => props.isDefaultTheme ? '' : 'var(--primary)'};
      font-weight: ${props => props.isDefaultTheme ? '' : 'bold'};
    }

    &:hover {
      color: var(--primary);
    }
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