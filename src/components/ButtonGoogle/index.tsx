import { Button } from './styles';

import googleIconImg from '../../assets/images/google-icon.svg';

type ButtonGoogleProps = {
  handleCreateRoom: () => Promise<void>;
}

export function ButtonGoogle({ handleCreateRoom }: ButtonGoogleProps) {
  return (
    <Button onClick={handleCreateRoom}>
      <img src={googleIconImg} alt="Ícone do Google" />
      Crie sua sala com o Google
    </Button>
  )
}