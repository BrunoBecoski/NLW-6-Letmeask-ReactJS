import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  cursor: pointer;
  color: var(--black);
  background: var(--white);
  border: 2px solid var(--primary);
  box-shadow: 1px 1px 3px var(--black);

  display: flex;

  transition: box-shadow .3s, background .3s, color .3s;

  div svg path {
    transition: stroke .3s;
  }

  &:hover {
    background: var(--primary); 
    border-color: var(--white);
    box-shadow: 1px 1px 5px var(--white);
    
    div {
      background: var(--white);    
      svg path { 
        stroke-width: 2px;
        stroke: var(--primary);
      }
    }
    span {
      color: var(--white);
    }
  }

  div {
    height: 100%;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
  }

  span {
    width: auto;
    flex: 1;
    display: block;
    align-self: center;
    padding: 0 16px 0 12px;
    font-size: 14px;
    font-weight: 500;
  }
`;
