import React, { useContext, useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
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
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 1px 1px grey'
  },
  // nested: {
  //   paddingLeft: theme.spacing(4)
  // },
  list: {
    width: 250
  },
  links: {
    textDecoration: 'none'
  },
  menuHeader: {
    paddingLeft: '30px'
  }
}))
const data = [
  {
    name: 'Transport Deals',
    children: [
      {
        name: 'Import',
        url: '/import'
      },
      {
        name: 'Export',
        url: '/export'
      },
      {
        name: 'Cross Trade',
        url: '/crossTrade'
      },
      {
        name: 'ECS',
        url: '/esc'
      },
      {
        name: 'Ohter Deals',
        url: '/otherDeals'
      }
    ]
  },
  {
    name: 'Operations',
    children: [
      {
        name: 'Container Movement',
        url: '/containerMovement'
      },
      {
        name: 'Vessel Schedule',
        url: '/vesselSchedule'
      },
      {
        name: 'Vessel/Voyage Management',
        url: '/vessel/voyageManagement'
      },
      {
        name: 'Vessel Follow Up',
        url: '/vesselFollowUp'
      },
      {
        name: 'Trucking Orders',
        url: '/truckingOrders'
      }
    ]
  },
  {
    name: 'Invoicing',
    children: [
      {
        name: 'Invoices',
        url: 'invoices'
      },
      {
        name: 'Bills',
        url: '/bills'
      }
    ]
  },
  {
    name: 'Accounting & Financing',
    children: [
      {
        name: 'Payments',
        url: 'payments'
      },
      {
        name: 'Overdraft Report',
        url: '/overdraftReport'
      },
      {
        name: 'Party Balance',
        url: '/partyBalance'
      },
      {
        name: 'Export to 3 rd party sftw',
        url: '/exportTo'
      },
      {
        name: 'Currency rates',
        url: '/currencyRates'
      }
    ]
  },
  {
    name: 'Address book',
    children: [
      {
        name: 'Address Book',
        url: 'addressBook'
      },
      {
        name: 'Customer Management',
        url: '/customerManagement'
      }
    ]
  },
  {
    name: 'Reports',
    children: [
      {
        name: 'Financial report',
        url: 'financialReport'
      },
      {
        name: 'Equipment Report',
        url: '/equipmentReport'
      },
      {
        name: 'Vessels Report',
        url: '/vesselsReport'
      },
      {
        name: 'Reports to HQ',
        url: '/reportsToHQ'
      }
    ]
  },
  {
    name: 'Documents & attachments',
    children: [
      {
        name: 'MBL',
        url: 'mbl'
      },
      {
        name: 'Attachments by deal',
        url: '/attachmentsByDeal'
      }
    ]
  },
  {
    name: 'Settings',
    children: [
      {
        name: 'General',
        url: 'general'
      },
      {
        name: 'Documents',
        url: '/documents'
      },
      {
        name: 'Countries and Locations',
        url: '/countriesAndLocations'
      },
      {
        name: 'Nomenclatures',
        url: '/nomenclatures'
      },
      {
        name: 'Price List',
        url: '/priceList'
      },
      {
        name: 'User Management',
        url: '/userManagement'
      },
      {
        name: 'System',
        url: '/system'
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
            <List>
              <ListItem
                button
                key={subOption.name}
                style={{ paddingLeft: '20%' }}
                // style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link to={subOption.url} className={classes.links}>
                  <ListItemText primary={subOption.name} />
                </Link>
              </ListItem>
            </List>
          </div>
        )
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <Divider />
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
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
    <div className={classes.list}>
      <Drawer
        variant="persistent"
        anchor="left"
        open
        classes={{ paper: classes.list }}
      >
        <div>
          <List>
            <ListItem key="menuHeading" divider disableGutters>
              <ListItemText
                className={classes.menuHeader}
                primary="3 stars admin"
              />
            </ListItem>
            {handler(data)}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
export default NestedList
