import React, { useContext, useEffect, useState } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import { UIcontext, UiProvider, UiConsumer } from '../context/UIcontext'
import {
  CloudDownload,
  CloudUpload,
  Shuffle,
  LocalShipping,
  MoreHoriz,
  SwapHorizontalCircle,
  Ballot,
  Assignment,
  Settings,
  VerticalAlignTop,
  Description,
  Receipt,
  Timeline,
  EuroSymbol,
  TrendingUp,
  Payment,
  Layers,
  LinearScale,
  Reply,
  StarRate,
  AccountBox,
  PermIdentity,
  SpeakerNotes,
  PieChart,
  SettingsApplications,
  DirectionsBoat,
  Map,
  Attachment,
  PowerSettingsNew,
  FileCopy,
  Place,
  LocalAtm,
  LocalOffer
} from '@material-ui/icons/'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 1px 1px grey',
    position: 'fixed'
  },
  links: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    width: '100%'
  },
  menuHeader: {
    paddingLeft: '30px'
  },
  list: {
    backgroundColor: '#f1f1f1a3',
    padding: 'unset'
  },
  listItem: {
    display: 'flex',
    '&:hover': {
      boxShadow: '#3f51b5 -4px 0px 0px inset',
      // backgroundColor: 'unset',
      transition: '0.5s'
    }
  },
  active: {
    boxShadow: '#3f51b5 -4px 0px 0px inset'
  }
}))
const data = [
  {
    name: 'Transport Deals',
    icon: <LocalShipping />,
    children: [
      {
        name: 'Import',
        url: '/import',
        icon: <CloudDownload />
      },
      {
        name: 'Export',
        url: '/export',
        icon: <CloudUpload />
      },
      {
        name: 'Cross Trade',
        url: '/crossTrade',
        icon: <Shuffle />
      },
      {
        name: 'ECS',
        url: '/esc',
        icon: ''
      },
      {
        name: 'Ohter Deals',
        url: '/otherDeals',
        icon: <MoreHoriz />
      }
    ]
  },
  {
    name: 'Operations',
    icon: <SwapHorizontalCircle />,
    children: [
      {
        name: 'Container Movement',
        url: '/containerMovement',
        icon: <Ballot />
      },
      {
        name: 'Vessel Schedule',
        url: '/vesselSchedule',
        icon: <Assignment />
      },
      {
        name: 'Vessel/Voyage Management',
        url: '/vessel/voyageManagement',
        icon: <Settings />
      },
      {
        name: 'Vessel Follow Up',
        url: '/vesselFollowUp',
        icon: <VerticalAlignTop />
      },
      {
        name: 'Trucking Orders',
        url: '/truckingOrders',
        icon: <Description />
      }
    ]
  },
  {
    name: 'Invoicing',
    icon: <Timeline />,
    children: [
      {
        name: 'Invoices',
        url: 'invoices',
        icon: <Receipt />
      },
      {
        name: 'Bills',
        url: '/bills',
        icon: <EuroSymbol />
      }
    ]
  },
  {
    name: 'Accounting & Financing',
    icon: <TrendingUp />,
    children: [
      {
        name: 'Payments',
        url: 'payments',
        icon: <Payment />
      },
      {
        name: 'Overdraft Report',
        url: '/overdraftReport',
        icon: <Layers />
      },
      {
        name: 'Party Balance',
        url: '/partyBalance',
        icon: <LinearScale />
      },
      {
        name: 'Export to 3 rd party sftw',
        url: '/exportTo',
        icon: <Reply />
      },
      {
        name: 'Currency rates',
        url: '/currencyRates',
        icon: <StarRate />
      }
    ]
  },
  {
    name: 'Address book',
    icon: <AccountBox />,
    children: [
      {
        name: 'Address Book',
        url: 'addressBook',
        icon: <AccountBox />
      },
      {
        name: 'Customer Management',
        url: '/customerManagement',
        icon: <PermIdentity />
      }
    ]
  },
  {
    name: 'Reports',
    icon: <SpeakerNotes />,
    children: [
      {
        name: 'Financial report',
        url: 'financialReport',
        icon: <PieChart />
      },
      {
        name: 'Equipment Report',
        url: '/equipmentReport',
        icon: <SettingsApplications />
      },
      {
        name: 'Vessels Report',
        url: '/vesselsReport',
        icon: <DirectionsBoat />
      },
      {
        name: 'Reports to HQ',
        url: '/reportsToHQ',
        icon: <Map />
      }
    ]
  },
  {
    name: 'Documents & attachments',
    icon: <Layers />,
    children: [
      {
        name: 'MBL',
        url: 'mbl',
        icon: ''
      },
      {
        name: 'Attachments by deal',
        url: '/attachmentsByDeal',
        icon: <Attachment />
      }
    ]
  },
  {
    name: 'Settings',
    icon: <Settings />,
    children: [
      {
        name: 'General',
        url: 'general',
        icon: <PowerSettingsNew />
      },
      {
        name: 'Documents',
        url: '/documents',
        icon: <FileCopy />
      },
      {
        name: 'Countries and Locations',
        url: '/countriesAndLocations',
        icon: <Place />
      },
      {
        name: 'Nomenclatures',
        url: '/nomenclatures',
        icon: <LocalOffer />
      },
      {
        name: 'Price List',
        url: '/priceList',
        icon: <LocalAtm />
      },
      {
        name: 'User Management',
        url: '/userManagement',
        icon: ''
      },
      {
        name: 'System',
        url: '/system',
        icon: <Settings />
      }
    ]
  }
]
const NestedList = props => {
  const classes = useStyles()
  const [state, setState] = useState(true)
  const handleClick = item => {
    setState(state => ({ [item]: !state[item] }))
  }
  const handler = children => {
    return children.map(subOption => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <List className={classes.list}>
              <ListItem
                button
                key={subOption.name}
                // style={{ display: 'flex', justifyContent: 'flex-end' }}
                className={classes.listItem}
              >
                <NavLink
                  to={subOption.url}
                  exact
                  className={classes.links}
                  activeClassName={classes.active}
                >
                  <div>
                    <ListItemIcon>
                      {subOption.icon || <InboxIcon />}
                    </ListItemIcon>
                  </div>
                  <div>
                    <ListItemText primary={subOption.name} />
                  </div>
                </NavLink>
              </ListItem>
            </List>
          </div>
        )
      }
      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => handleClick(subOption.name)}
            // style={{ boxShadow: 'rgba(0, 0, 0, 0.17) -2px 0px 0px inset' }}
          >
            <Divider />
            <ListItemIcon>{subOption.icon || <InboxIcon />}</ListItemIcon>
            <ListItemText primary={subOption.name} />
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {handler(subOption.children)}
          </Collapse>
        </div>
      )
    })
  }
  return (
    // <Drawer
    //   variant="persistent"
    //   anchor="left"
    //   open
    //   classes={{ paper: classes.list }}
    // >
    <List style={{ boxShadow: '0 0 3px 0px #c3c3c3', height: '100%' }}>
      <ListItem key="menuHeading" disableGutters>
        <ListItemText className={classes.menuHeader} primary="3 stars admin" />
      </ListItem>
      {handler(data)}
    </List>
    // </Drawer>
  )
}
export default NestedList
