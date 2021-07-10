import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: var(--white);
  color: var(--black);
  border: 1px solid var(--primary);
  cursor: pointer;
  box-shadow: 1px 1px 5px var(--color_50);

  display: flex;

  transition: box-shadow .3s, background .3s, color .3s;

  div svg path {
    transition: stroke .3s;
  }

  &:hover {
    box-shadow: 1px 1px 10px var(--primary);

    background: var(--primary); 
    div {
      background: var(--white);    
      svg path { 
        stroke: var(--primary);
      }
    }
    span {
      color: var(--white);
    }
  }

  div {
    background: var(--primary);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }
`;
