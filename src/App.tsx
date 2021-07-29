import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

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
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);
  const [primaryColor, setPrimaryColor] = useState<'purple' | 'red' | 'green' | 'blue'>('purple');  
    
  function handleOpenThemeModal() {
    setThemeModalIsOpen(true);
  }

  function handleCloseThemeModal() {
    setThemeModalIsOpen(false);
  }

  function handleSetPrimaryColor(color: 'purple' | 'red' | 'green' | 'blue') {
    setPrimaryColor(color);
  }


  const title = isDefaultTheme ? light : dark; 

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
  title: `${title.title}_${primary.title}`,

  colors: {
    background: title.colors.background,
    color: title.colors.color,
    color_15: title.colors.color_15,
    color_50: title.colors.color_50,
    color_80: title.colors.color_80,
    details: title.colors.details,
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
        setIsDefaultTheme={setIsDefaultTheme}
        primaryColor={primaryColor}
        handleSetPrimaryColor={handleSetPrimaryColor}
      />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
