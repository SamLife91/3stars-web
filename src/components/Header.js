import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { UIcontext } from '../context/UIcontext';

import { createBrowserHistory } from 'history';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    textTransform: 'capitalize'
  }
}));

const Header = props => {
  const history = createBrowserHistory();
  const location = history.location;
  console.log(location.pathname);

  const classes = useStyles();
  // const { fw } = useContext(UIcontext);

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
