import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Azul Claro: para enlaces, botones y textos destacados.
    },
    secondary: {
      main: '#26418F', // Azul Oscuro: para secciones destacadas o contraste.
    },
    text: {
      primary: '#000000', // Negro: para texto principal y encabezados.
      secondary: '#666666', // Gris Neutro: para textos secundarios y párrafos extensos.
    },
    background: {
      default: '#FFFFFF', // Blanco: fondo principal y balance visual.
    },
  },
  typography: {
    // Fuente predeterminada para textos generales
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif', // Titulares principales
      fontSize: '32px',
      color: '#000000', // O también se puede usar Azul Claro (#4A90E2) según la necesidad
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '28px',
      color: '#000000',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '24px',
      color: '#000000',
    },
    body1: {
      fontFamily: '"Lato", sans-serif', // Para párrafos y descripciones
      fontSize: '16px',
      color: '#666666',
    },
    button: {
      fontFamily: '"Poppins", sans-serif', // Para botones y textos destacados
      fontSize: '16px', // Se puede ajustar entre 16px y 20px según convenga
      color: '#4A90E2',
      textTransform: 'none', // Opcional: para mantener la capitalización original
    },
    subtitle1: {
      fontFamily: '"Open Sans", sans-serif', // Para títulos secundarios y textos generales
      fontSize: '18px', // Puede variar entre 14px y 18px
      color: '#000000',
    },
  },
});

export default theme;
