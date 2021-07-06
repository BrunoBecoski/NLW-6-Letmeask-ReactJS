import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  position: fixed;

  background: transparent;
  border: none;

  bottom: 50px;
  right: 50px;

  font-size: 32px;

  transition: color .2s;
   
  &:hover {
    color: var(--purple);
  }
`;