import styled from 'styled-components';

export const Header = styled.header`
  @media (max-width: 720px) {
    padding: 12px;

    .content > img {
      display: none;
    }
  }
  
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }
    }
  }
`;

export const Main = styled.main`
  @media (max-width: 720px) {
    margin: 0 16px;
    margin-bottom: 16px;
  }

  max-width: 800px;
  margin: 0 auto;

  margin-bottom: 50px;

  h2 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }

  .room-title {
    margin:  32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: var(--black);
    }

    span {
      margin-left: 16px;
      background:var(--pink-dark);
      border-radius: 9999px;
      padding: 8px 16px;
      color: #FFF;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .question-list {
    margin-top: 32px;
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: var(--white-details);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
    outline: none;
  
    &:focus {
      border: 1px solid var(--purple);
    }
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: var(--black);
        font-weight: 500;
        font-size: 14px;
      }
    }

    > span {
      font-size: 14px;
      color: var(--gray-dark);
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: var(--purple);
        text-decoration: underline;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      } 
    }
  }

`;

export const Spinner = styled.div`
  margin: 50px auto;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(to right, var(--purple) 10%, rgba(255, 255, 255, 0) 50%);
  animation: rotate360 1s infinite linear;

  &:before {
    width: 50%;
    height: 50%;
    background: var(--purple);
    border-radius: 100% 0 0 0;
    position: absolute;
    content: '';
  }

  &:after {
    background: var(--white-background);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes rotate360 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;