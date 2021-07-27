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
  border: 2px solid var(--primary);
  box-shadow: 1px 1px 5px var(--color_50);

  transition: color .3s, background .3s, box-shadow .3s;

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
    color: var(--primary);
    background: var(--white);
  
    box-shadow: 1px 1px 10px var(--primary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;