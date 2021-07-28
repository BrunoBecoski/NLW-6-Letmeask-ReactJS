import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  position: fixed;

  
  background: transparent;
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 0;
  padding: 0;
  
  bottom: 50px;
  right: 50px;
  
  font-size: 50px;
  line-height: 50px;
  
  svg {
    stroke-width: 10px;
    fill: var(--color);
  }
  
   
  &:hover {
    svg { 
      fill: var(--primary);
    }
  }
`;