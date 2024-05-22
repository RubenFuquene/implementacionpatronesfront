import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(251, 231, 232)',
    },
    text: {
      primary: 'rgb(184, 17, 24)',
    },
    primary: {
      main: 'rgb(184, 17, 24)',
    },
    secondary: {
      main: 'rgb(233, 180, 164)',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      background: 'linear-gradient(to right, rgb(233, 180, 164), rgb(149, 109, 101))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

export default theme;