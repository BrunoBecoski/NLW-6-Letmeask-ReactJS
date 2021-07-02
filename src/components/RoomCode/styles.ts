import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #FFF;
  border: 1px solid var(--purple);
  cursor: pointer;

  display: flex;

  transition: border .2s;

  &:hover {
    border-color: var(--hover-purple);    
    div {
      background: var(--hover-purple);    
    }
  }

  div {
    background: var(--purple);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    transition: background .2s;
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
