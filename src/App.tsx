import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { defaultTheme } from './styles/theme';
import { GlobalStyle } from './styles/Global';
import { Miragejs } from './services/miragejsConfig';
import { CoffeCartProvider } from './Context/CoffeContext';
import { AddresProvider } from './Context/AddressContext';

Miragejs();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeCartProvider>
          <AddresProvider>
            <Router />
          </AddresProvider>
        </CoffeCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
