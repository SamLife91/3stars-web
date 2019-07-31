import React, { useContext, useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { UIcontext, UiProvider, UiConsumer } from "../context/UIcontext";

import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 1px 1px grey"
  },
  list: {
    width: 250
  },
  links: {
    textDecoration: "none"
  },
  menuHeader: {
    paddingLeft: "30px"
  }
}));
const data = [
  {
    name: "Transport Deals",
    icon: "",
    children: [
      {
        name: "Import",
        url: "/import",
        icon: <CheckCircleOutline />
      },
      {
        name: "Export",
        url: "/export",
        icon: ""
      },
      {
        name: "Cross Trade",
        url: "/crossTrade",
        icon: ""
      },
      {
        name: "ECS",
        url: "/esc",
        icon: ""
      },
      {
        name: "Ohter Deals",
        url: "/otherDeals",
        icon: ""
      }
    ]
  },
  {
    name: "Operations",
    icon: "",
    children: [
      {
        name: "Container Movement",
        url: "/containerMovement",
        icon: ""
      },
      {
        name: "Vessel Schedule",
        url: "/vesselSchedule",
        icon: ""
      },
      {
        name: "Vessel/Voyage Management",
        url: "/vessel/voyageManagement",
        icon: ""
      },
      {
        name: "Vessel Follow Up",
        url: "/vesselFollowUp",
        icon: ""
      },
      {
        name: "Trucking Orders",
        url: "/truckingOrders",
        icon: ""
      }
    ]
  },
  {
    name: "Invoicing",
    icon: "",
    children: [
      {
        name: "Invoices",
        url: "invoices",
        icon: ""
      },
      {
        name: "Bills",
        url: "/bills",
        icon: ""
      }
    ]
  },
  {
    name: "Accounting & Financing",
    icon: "",
    children: [
      {
        name: "Payments",
        url: "payments",
        icon: ""
      },
      {
        name: "Overdraft Report",
        url: "/overdraftReport",
        icon: ""
      },
      {
        name: "Party Balance",
        url: "/partyBalance",
        icon: ""
      },
      {
        name: "Export to 3 rd party sftw",
        url: "/exportTo",
        icon: ""
      },
      {
        name: "Currency rates",
        url: "/currencyRates",
        icon: ""
      }
    ]
  },
  {
    name: "Address book",
    icon: "",
    children: [
      {
        name: "Address Book",
        url: "addressBook",
        icon: ""
      },
      {
        name: "Customer Management",
        url: "/customerManagement",
        icon: ""
      }
    ]
  },
  {
    name: "Reports",
    icon: "",
    children: [
      {
        name: "Financial report",
        url: "financialReport",
        icon: ""
      },
      {
        name: "Equipment Report",
        url: "/equipmentReport",
        icon: ""
      },
      {
        name: "Vessels Report",
        url: "/vesselsReport",
        icon: ""
      },
      {
        name: "Reports to HQ",
        url: "/reportsToHQ",
        icon: ""
      }
    ]
  },
  {
    name: "Documents & attachments",
    icon: "",
    children: [
      {
        name: "MBL",
        url: "mbl",
        icon: ""
      },
      {
        name: "Attachments by deal",
        url: "/attachmentsByDeal",
        icon: ""
      }
    ]
  },
  {
    name: "Settings",
    icon: "",
    children: [
      {
        name: "General",
        url: "general",
        icon: ""
      },
      {
        name: "Documents",
        url: "/documents",
        icon: ""
      },
      {
        name: "Countries and Locations",
        url: "/countriesAndLocations",
        icon: ""
      },
      {
        name: "Nomenclatures",
        url: "/nomenclatures",
        icon: ""
      },
      {
        name: "Price List",
        url: "/priceList",
        icon: ""
      },
      {
        name: "User Management",
        url: "/userManagement",
        icon: ""
      },
      {
        name: "System",
        url: "/system",
        icon: ""
      }
    ]
  }
];
const NestedList = props => {
  const classes = useStyles();
  const [state, setState] = useState(true);
  const handleClick = item => {
    setState(state => ({ [item]: !state[item] }));
  };
  const handler = children => {
    return children.map(subOption => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <List>
              <ListItem
                button
                key={subOption.name}
                style={{ paddingLeft: "20%" }}
                // style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ListItemIcon>
                  {/* <InboxIcon /> */}
                  {subOption.icon || <InboxIcon />}
                </ListItemIcon>
                <Link to={subOption.url} className={classes.links}>
                  <ListItemText primary={subOption.name} />
                </Link>
              </ListItem>
            </List>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <Divider />
            <ListItemIcon>
              <InboxIcon />
              {/* {subOption.icon} */}
              {/* {console.log(subOption)} */}
            </ListItemIcon>
            <ListItemText primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };
  return (
    // <Drawer
    //   variant="persistent"
    //   anchor="left"
    //   open
    //   classes={{ paper: classes.list }}
    // >
    <List style={{ boxShadow: "0 0 3px 0px #c3c3c3", height: `${100}vh` }}>
      <ListItem key="menuHeading" disableGutters>
        <ListItemText className={classes.menuHeader} primary="3 stars admin" />
      </ListItem>
      {handler(data)}
    </List>
    // </Drawer>
  );
};
export default NestedList;
