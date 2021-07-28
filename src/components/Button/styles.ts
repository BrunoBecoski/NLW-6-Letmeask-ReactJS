import styled from 'styled-components';

export const Container = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--primary);
  color: var(--white);
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 3px solid var(--primary);
  box-shadow: 1px 1px 3px var(--color_50);

  transition: all .3s;

  img {
    margin-right: 8px;
  }



  &.outlined {
    box-shadow: 1px 1px 3px var(--black);
    color: var(--primary);
    background: #FFF;
  }

  &.outlined:hover {
    color: var(--white);
    background: var(--primary);
    border-color: var(--white);
    box-shadow: 1px 1px 5px var(--white);
  }

  &:not(:disabled):not(.outlined):hover {
    border-color: var(--white);
    font-weight: bold;
    box-shadow: 1px 1px 10px var(--primary);
    letter-spacing: 1px;
    padding: 0 24px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;