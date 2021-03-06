import { createMuiTheme } from '@material-ui/core/styles';
const font = "'Lexend Deca', sans-serif";

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: font
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#6930c3',
    },
    background: {
      paper: '#252525',
    }
  }
});

export default theme;
