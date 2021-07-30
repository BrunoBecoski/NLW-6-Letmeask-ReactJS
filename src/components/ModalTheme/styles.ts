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
  /* display: flex; */
  /* justify-content: center; */

   
  label {
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    
  
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    &:hover.purple {
      color: #835AFD;
    }

    &:hover.red {
      color: #CD5C5C;
    }

    &:hover.green {
      color: #2E8B57;
    }

    &:hover {
      color: #4169E1;
    }
  }

  label:hover input ~ .checkmark {
    background-color: #ccc;
  }

  label.purple input:checked ~ .checkmark,
  label:hover.purple .checkmark {
    background-color: #835AFD;
  }

  label.red input:checked ~ .checkmark,
  label:hover.red .checkmark {
    background-color: #CD5C5C;
  }

  label.green input:checked ~ .checkmark,
  label:hover.green .checkmark {
    background-color: #2E8B57;
  }

  label.blue input:checked ~ .checkmark,
  label:hover.blue .checkmark {
    background-color: #4169E1;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ .checkmark:after {
    display: block;
  }

  label .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  } 
`; 

// label {
//   position: relative;
//   padding-left: 35px;
//   margin-bottom: 12px;
//   cursor: pointer;
//   font-size: 22px;
//   user-select: none;
// }

// label input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
// }

// .checkmark {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 25px;
//   width: 25px;
//   background-color: #eee;
//   border-radius: 50%;
// }

// label:hover input ~ .checkmark {
//   background-color: #ccc;
// }

// label input:checked ~ .checkmark {
//   color: yellow;
// }

// label.purple input:checked ~ .checkmark {
//   background-color: #835AFD;
// }

// label.red input:checked ~ .checkmark {
//   background-color: #CD5C5C;
// }

// label.green input:checked ~ .checkmark {
//   background-color: #2E8B57;
// }

// label.blue input:checked ~ .checkmark {
//   background-color: #4169E1;
// }

// .checkmark:after {
//   content: "";
//   position: absolute;
//   display: none;
// }

// label input:checked ~ .checkmark:after {
//   display: block;
// }

// label .checkmark:after {
//   top: 9px;
//   left: 9px;
//   width: 8px;
//   height: 8px;
//   border-radius: 50%;
// } 