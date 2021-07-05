import toast, { Toaster } from 'react-hot-toast';

import copyImg from '../../assets/images/copy.svg';

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    if(window.isSecureContext) {
      navigator.clipboard.writeText(props.code)
    }

    toast.success('Código copiado', { duration: 2000,
      position: 'top-center',
      style: {
        fontWeight: 500,
        color: 'var(--purple)',
        border: '1px solid var(--purple)',
      },
    });
  }

  return (
    <>
      <Toaster />

      <Container onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </Container>
    </>
  );
}