import { HTMLAttributes } from 'react';
import { Button } from './styles';

export function ButtonTheme(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
      🖌
    </ Button>
  )
}