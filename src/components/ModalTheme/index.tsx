import { Modal, ThemeSelector, ColorSelector } from './styles';

type ModalThemeProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  themeColor: string;
  handleSetThemeColor: (color: 'light' | 'dark') => void;
  primaryColor: string;
  handleSetPrimaryColor: (color: 'purple' | 'red' | 'green' | 'blue') => void;
}

export function ModalTheme({ 
  isOpen, 
  onRequestClose,
  themeColor, 
  handleSetThemeColor,
  primaryColor,
  handleSetPrimaryColor
}: ModalThemeProps) {

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
      <button className="closeButton" onClick={onRequestClose}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.66 18.3398L18.34 29.6598" stroke="var(--color_50)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29.66 29.6598L18.34 18.3398" stroke="var(--color_50)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="content">
        <h1>Escolha o tema da aplicação</h1>

        <ThemeSelector> 
          <label className="light">
            <input 
              name="theme_color"
              type="radio"
              onChange={() => handleSetThemeColor('light')}
              checked={themeColor === 'light' ? true : false}
            />
            <span className="checkmark"/>

              Claro
          </label>

          <label className="dark">
            <input 
              name="theme_color"
              type="radio"
              onChange={() => handleSetThemeColor('dark')}
              checked={themeColor === 'dark' ? true : false}
            />
            <span className="checkmark"/>
              Escuro
          </label>
        </ThemeSelector>

        <ColorSelector>
          <label className="purple">
            <input 
              name="primary_color"
              type="radio"
              onChange={() => handleSetPrimaryColor('purple')}
              checked={primaryColor === 'purple' ? true : false}
            />
            <span className="checkmark"/>
          </label>

          <label className="red">
            <input 
              name="primary_color"
              type="radio"
              onChange={() => handleSetPrimaryColor('red')}
              checked={primaryColor === 'red' ? true : false}
            />
            <span className="checkmark"/>
          </label>

          <label className="green">
            <input 
              name="primary_color"
              type="radio"
              onChange={() => handleSetPrimaryColor('green')}
              checked={primaryColor === 'green' ? true : false}
            />
            <span className="checkmark"/>
          </label>

          <label className="blue"> 
            <input 
              name="primary_color"
              type="radio"
              onChange={() => handleSetPrimaryColor('blue')}
              checked={primaryColor === 'blue' ? true : false}
            />
            <span className="checkmark"/>
          </label>
        </ColorSelector>
      </div>
    </Modal>
  )
}