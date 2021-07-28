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
      <button onClick={onRequestClose}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.66 18.3398L18.34 29.6598" stroke="var(--color_50)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29.66 29.6598L18.34 18.3398" stroke="var(--color_50)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div>
        <h1>Escolha o tema da aplicação</h1>
        <div>
          <button onClick={() => setIsDefaultTheme(true)}>Claro</button>
          <button onClick={() => setIsDefaultTheme(false)}>Escuro</button>
        </div>
      </div>
    </Modal>
  )
}