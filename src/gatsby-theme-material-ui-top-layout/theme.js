import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#42b3e4",
      main: "#13A1DE",
      dark: "#0d709b",
    },
    text: {
      primary: "#57595B"
    }
  }
});

export default theme;