import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Components/Header';
import Hero from './Components/Hero';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

 const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',  
    primary: {
      main: darkMode ? '#90caf9' : '#1976d2', 
    },
  },
});

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
       <Hero />
    </ThemeProvider>
  );
};

export default App;
