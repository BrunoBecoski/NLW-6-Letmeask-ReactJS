import styled from 'styled-components';

export const Container = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--primary);
  color: #FFF;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: background 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined{
    background: #FFF;
    border: 1px solid var(--primary);
    color: var(--primary);
  }

  &.outlined:hover {
    border-color: var(--primary-hover);
    color: var(--primary-hover);
  }

  &:not(:disabled):not(.outlined):hover {
    background: var(--primary-hover);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;