import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  position: fixed;

  color: var(--color);

  background: transparent;
  border: 2px solid var(--color);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;


  margin: 0;
  padding: 0;

  width: 50px;
  height: 50px;

  bottom: 50px;
  right: 50px;

  font-size: 25px;
  line-height: 25px;

   
  &:hover {
    color: var(--primary);
    border-color: var(--primary);
  }
`;