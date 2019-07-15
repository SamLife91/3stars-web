import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Table from '../../components/import/Table'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}))

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }
  // const headings = [
  //   'Level',
  //   'Item Type',
  //   'Beneficiary',
  //   'Payer',
  //   'Doc Type',
  //   'UOM',
  //   'QTY',
  //   '>Unit Price',
  //   'Pay Terms',
  //   'Unit Pricee',
  //   'Currency',
  //   'PP_CC',
  //   'Amount',
  //   'Payments',
  //   'Total Invoice',
  //   'QTY Total',
  //   'Opposite Inv',
  //   'Opposite Inv Qty',
  //   'Source',
  //   'Cup',
  //   'Good D'
  // ]
  // const rows = [
  //   [
  //     'All',
  //     'AFI',
  //     'THREE STARS Ltd',
  //     '',
  //     'Invoice',
  //     'SHIPMENT',
  //     2.0,
  //     15.0,
  //     'NOT DEFINED',
  //     '',
  //     'EUR',
  //     'CC',
  //     30.0,
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'com.nbl.business....',
  //     'Security'
  //   ],
  //   [
  //     'All',
  //     'AFI',
  //     'THREE STARS Ltd',
  //     '',
  //     'Invoice',
  //     'SHIPMENT',
  //     2.0,
  //     15.0,
  //     'NOT DEFINED',
  //     '',
  //     'EUR',
  //     'CC',
  //     30.0,
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     'com.nbl.business....',
  //     'Security'
  //   ]
  // ]
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Cargo" />
          <Tab label="Collectibles" />
          <Tab label="Payables" />
          <Tab label="All" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <Table />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Table />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <Table />
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <Table />
        </TabContainer>
      )}
    </div>
  )
}
