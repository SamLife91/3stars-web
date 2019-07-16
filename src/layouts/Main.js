import React, { useContext, useEffect, useState, setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { UIcontext } from "../context/UIcontext";

const useStyles = makeStyles(theme => ({
  base: {
    display: "flex"
    // flexDirection: "column"
  },
  main: {
    display: "flex",
    flexDirection: "column"
  },
  col: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
    // justifyContent: "center"
  },
  hidden: {
    display: "none"
  }
}));

const MainLayout = props => {
  const ctx = useContext(UIcontext);
  console.log(ctx);
  const { fw } = useContext(UIcontext);
  console.log(fw);
  const styles = useStyles();
  // useEffect(() => {
  //   console.log(fw);
  //   // fn();
  // }, [fw]);
  return (
    <div className={styles.base}>
      <UIcontext.Consumer>
        {context => (
          <div className={fw ? styles.hidden : styles.col} style={{ flex: 1 }}>
            {props.sidebarComponent}
            {console.log(fw)}
          </div>
        )}
      </UIcontext.Consumer>
      {/* <div className={styles.col} style={{ flex: 1 }}>
        {props.sidebarComponent}
      </div> */}
      <div className={styles.col} style={{ flex: 6 }}>
        <div>{props.headerComponent}</div>
        <div>{props.mainComponent}</div>
      </div>
    </div>
  );
};
export default MainLayout;
