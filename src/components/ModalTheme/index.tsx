import { Modal } from './styles';

type ModalThemeProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  setIsDefaultTheme: (is: boolean) => void;
}

export function ModalTheme({ isOpen, onRequestClose, setIsDefaultTheme}: ModalThemeProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          background: 'var(--shadow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      <h1>Escolha o tema da aplicação</h1>
      <div>
        <button onClick={() => setIsDefaultTheme(true)}>Claro</button>
        <button onClick={() => setIsDefaultTheme(false)}>Escuro</button>
      </div>
    </Modal>
  )
}