import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: medium;
  background: var(--white);
  color: var(--black);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  justify-content: center;

  gap: 8px;

  cursor: pointer;
  border: 0;

  box-shadow: 1px 1px 5px var(--color_50);

  transition: color .3s, background .3s, box-shadow .3s;

  div {
    width: 46px; 
    height: 46px;
  }

  &:hover {
    color: var(--white);
    background: var(--blue_google);

    box-shadow: 1px 1px 10px var(--blue_google);
  }
`;