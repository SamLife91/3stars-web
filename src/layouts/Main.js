import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UIcontext } from '../context/UIcontext';

const useStyles = makeStyles(theme => ({
  base: {
    display: 'flex'
  },
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  col: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'column'
  },
  hidden: {
    display: 'none'
  }
}));

const MainLayout = props => {
  const ctx = useContext(UIcontext);
  console.log(ctx);
  const { fw } = useContext(UIcontext);
  console.log(fw);
  const styles = useStyles();

  return (
    <div className={styles.base}>
      <UIcontext.Consumer>
        {context => (
          <div
            className={fw ? styles.hidden : styles.col}
            style={{
              width: '20vw',
              position: 'fixed',
              left: 0,
              top: 0,
              height: '100vh'
            }}
          >
            {props.sidebarComponent}
          </div>
        )}
      </UIcontext.Consumer>

      <div
        className={styles.col}
        style={{ width: fw ? '100vw' : '80vw', marginLeft: fw ? 0 : '20vw' }}
      >
        <div>{props.headerComponent}</div>
        <div>{props.mainComponent}</div>
      </div>
    </div>
  );
};
export default MainLayout;
