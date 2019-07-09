import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}));

// const MainLayout = props => {
//   return (
//     <div className={useStyles.base}>
//       <header style={{ flex: 1 }}>{props.headerComponent}</header>
//       <div
//         className="main"
//         style={{
//           display: "flex",
//           flexDirection: "row"
//         }}
//       >
//         <div
//           style={{
//             flex: 1,
//             alignSelf: "flex-start"
//           }}
//         >
//           {props.sidebarComponent}
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flex: 6,
//             flexDirection: "column",
//             justifyContent: "flex-start",
//             alignItems: "center",
//             height: "100vh"
//           }}
//         >
//           {props.mainComponent}
//         </div>
//       </div>
//     </div>
//   );
// };
const MainLayout = props => {
  const styles = useStyles();
  return (
    <div className={styles.base}>
      <div className={styles.col} style={{ flex: 1 }}>
        {props.sidebarComponent}
      </div>
      <div className={styles.col} style={{ flex: 6 }}>
        <div>{props.headerComponent}</div>
        <div>{props.mainComponent}</div>
      </div>
    </div>
  );
};
export default MainLayout;
