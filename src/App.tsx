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

import purple from './styles/themes/purple';
import red from './styles/themes/red';
import green from './styles/themes/green';
import blue from './styles/themes/blue';

function App() {
  const [themeModalIsOpen, setThemeModalIsOpen] = useState(false);
  const [themeColor, setThemeColor] = useState<'light' | 'dark' >('light');
  const [primaryColor, setPrimaryColor] = useState<'purple' | 'red' | 'green' | 'blue'>('purple');  
    
  function handleOpenThemeModal() {
    setThemeModalIsOpen(true);
  }

  function handleCloseThemeModal() {
    setThemeModalIsOpen(false);
  }

  function handleSetThemeColor(color: 'light' | 'dark') {
    setThemeColor(color);
  }

  function handleSetPrimaryColor(color: 'purple' | 'red' | 'green' | 'blue') {
    setPrimaryColor(color);
  }

  let theme = light;

  if(themeColor === 'light') {
    theme = light;
  }
  if(themeColor === 'dark') {
    theme = dark;
  }

  let primary =  purple;

  if (primaryColor === 'purple') {
    primary = purple
  }

  if (primaryColor === 'red') {
    primary = red
  }

  if (primaryColor === 'green') {
    primary = green
  }

  if (primaryColor === 'blue') {
    primary = blue
  }

 const newTheme = {
  title: `${theme.title}_${primary.title}`,

  colors: {
    background: theme.colors.background,
    color: theme.colors.color,
    color_15: theme.colors.color_15,
    color_50: theme.colors.color_50,
    color_80: theme.colors.color_80,
    details: theme.colors.details,
    primary: primary.colors.primary,
    primary_transparent: primary.colors.primary_transparent,
  }
 } 

  return (
    <ThemeProvider theme={newTheme} >
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
        themeColor={themeColor}
        handleSetThemeColor={handleSetThemeColor}
        primaryColor={primaryColor}
        handleSetPrimaryColor={handleSetPrimaryColor}
      />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
