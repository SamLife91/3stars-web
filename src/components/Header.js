import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { UIcontext } from "../context/UIcontext";

import { createBrowserHistory } from "history";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    textTransform: "capitalize"
    // flex: 1
    // alignSelf: "flex-start"
    // flexGrow: 1,
  }
}));

const Header = props => {
  const history = createBrowserHistory();
  const location = history.location;

  const classes = useStyles();
  const { fw } = useContext(UIcontext);

  useEffect(() => {
    console.log(fw);
  }, [fw]);
  return (
    <div className={classes.root}>
      <UIcontext.Consumer>
        {context => (
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={context.toggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {location.pathname}
              </Typography>
            </Toolbar>
          </AppBar>
        )}
      </UIcontext.Consumer>
    </div>
  );
};

export default Header;
