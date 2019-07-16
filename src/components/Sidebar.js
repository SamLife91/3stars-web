import React, { useContext, useEffect, Link } from "react";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import CloudUpload from "@material-ui/icons/CloudUpload";

import { UIcontext, UiProvider, UiConsumer } from "../context/UIcontext";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 1px 1px grey",
    position: "fixed"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column"
  }
}));

const NestedList = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <List style={{ boxShadow: "0 0 3px 0px #c3c3c3", height: `${100}vh` }}>
      {/* <List className={classes.sidebar} elevation={1}> */}
      <div
        style={{
          height: 54,
          display: "flex",
          alignItems: "center"
        }}
      >
        <ListItem>3 stars admin</ListItem>
        <Divider />
      </div>
      <ListItem button to={"/import"}>
        <ListItemIcon>
          <CloudUpload />
        </ListItemIcon>
        <ListItemText primary="Import" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};
export default NestedList;
