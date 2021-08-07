import "./App.css";
import Main from "./components/Main";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            COUNTERS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1>Hello</h1>s */}
      <Main />
    </div>
  );
}

export default App;
