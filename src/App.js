import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './utils/styles/theme';
import GlobalStyle from './utils/styles/global';

import Header from './components/Header/Header';
import SortingVisualizer from './containers/SortingVisualizer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SortingVisualizer />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
