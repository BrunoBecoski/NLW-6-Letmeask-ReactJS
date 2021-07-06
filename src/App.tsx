import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'; 

import { ButtonTheme } from './components/ButtonTheme';
import { ModalTheme } from './components/ModalTheme';

import { GlobalStyle } from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [themeModalIsOpen, setThemeModalIsOpen] = useState(false);
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);


  function handleOpenThemeModal() {
    setThemeModalIsOpen(true);
  }

  function handleCloseThemeModal() {
    setThemeModalIsOpen(false);
  }

  return (
    <ThemeProvider theme={isDefaultTheme ? light : dark}>
      <BrowserRouter>
        <GlobalStyle />
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
          
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
        
      <ButtonTheme onClick={handleOpenThemeModal} />

      <ModalTheme 
        isOpen={themeModalIsOpen}
        onRequestClose={handleCloseThemeModal}
        setIsDefaultTheme={setIsDefaultTheme}
      />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
