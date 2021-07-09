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
  border: 1px solid var(--primary);

  transition: background 1s, color 1s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    color: var(--primary);
    background: #FFF;
  }

  &.outlined:hover {
    color: var(--white);
    background: var(--primary);
  }

  &:not(:disabled):not(.outlined):hover {
    color: var(--primary);
    background: var(--white);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;