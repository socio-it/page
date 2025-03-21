import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#4A90E2' },
    secondary: { main: '#26418F' },
    text: { primary: '#000000', secondary: '#666666' },
    background: { default: '#FFFFFF' },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.8rem', // móvil pequeño
      '@media (min-width:600px)': {
        fontSize: '2.8rem', // tablet
      },
      '@media (min-width:960px)': {
        fontSize: '4rem', // escritorio grande
      },
      color: '#000000',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2.3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3.2rem',
      },
      color: '#000000',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.3rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
      color: '#000000',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.1rem',
      '@media (min-width:600px)': {
        fontSize: '1.6rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
      color: '#000000',
    },
    body1: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '0.95rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.1rem',
      },
      color: '#666666',
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.2rem',
      },
      color: '#4A90E2',
      textTransform: 'none',
    },
    subtitle1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.3rem',
      },
      color: '#000000',
    },
  },
});

export default theme;
