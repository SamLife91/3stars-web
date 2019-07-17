import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import MUIDataTable from 'mui-datatables'

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '40px 0px',
    padding: '24px 26px',
    backgroundColor: theme.palette.background.paper
  }
}))

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }
  const columnsCargo = [
    {
      name: 'transportUnit',
      label: 'Transport Unit',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'sealNum',
      label: 'Seal Num',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'containerType',
      label: 'Container Type',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'pcg',
      label: 'pcg',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'packagesType',
      label: 'Packages Type',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'goodsDescription',
      label: 'Goods Description',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'cargoGW',
      label: 'Cargo GW',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'mbl',
      label: 'mbl',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 't1',
      label: 't1',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'imo',
      label: 'imo',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'reefer',
      label: 'Reefer',
      options: {
        filter: true,
        sort: false
      }
    }
  ]
  const columnsCollectibles = [
    {
      name: 'level',
      label: 'Level',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'itemType',
      label: 'Item Type',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'beneficiary',
      label: 'Beneficiary',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'payer',
      label: 'Payer',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'docType',
      label: 'Doc Type',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'uom',
      label: 'UOM',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'qty',
      label: 'Qty.',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'unitPrice',
      label: 'Unit Price',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'currency',
      label: 'Currency',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'payTerms',
      label: 'Pay terms',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'unitPricee',
      label: 'Unit Price-',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'currency',
      label: 'Currency',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'ppcc',
      label: 'PP_CC',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'amount',
      label: 'Amount',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'payments',
      label: 'Payments',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'totalInvoice',
      label: 'Total Invoice',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'qtyTotal',
      label: 'QTY Total',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'oppositeInv',
      label: 'Opposite inv',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'oppositeInvQty',
      label: 'Opposite inv.qty.',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'source',
      label: 'Source',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'cup',
      label: 'CUP',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'goodD',
      label: 'Goods D',
      options: {
        filter: true,
        sort: true
      }
    }
  ]
  const dataCargo = [
    {
      transportUnit: 'UETU5326028',
      sealNum: 'C0093621',
      containerType: '40HC45G1',
      pcg: '144.00',
      packagesType: 'Package',
      goodsDescription: 'HS CODE:271019 RFCU406',
      cargoGW: '28 224.00',
      mbl: 'COEU9000405750',
      t1: '',
      imo: '',
      reefer: ''
    }
  ]
  const dataCollectibles = [
    {
      level: 'All',
      itemType: 'IPS/Security Tax',
      beneficiary: 'THREE STARS Ltd',
      payer: 'THREE STARS Ltd',
      docType: 'Invoice',
      uom: 'SHIPMENT',
      qty: '2.00',
      unitPrice: '15.0',
      payTerms: 'NOT DEFINED',
      unitPricee: '',
      currency: 'EUR',
      ppcc: 'CC',
      amount: '5.00',
      payments: '',
      totalInvoice: '',
      qtyTotal: '',
      oppositeInv: '',
      oppositeInvQty: '',
      source: '',
      cup: 'com.nbl.business....',
      goodD: 'Security'
    }
  ]
  const options = {
    filterType: 'checkbox',
    responsive: 'scroll'
  }
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
          <MUIDataTable
            title={'Cargo List'}
            data={dataCargo}
            columns={columnsCargo}
            options={options}
          />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <MUIDataTable
            title={'Collectibles List'}
            data={dataCollectibles}
            columns={columnsCollectibles}
            options={options}
          />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <MUIDataTable
            title={'Payables List'}
            data={dataCargo}
            columns={columnsCargo}
            options={options}
          />
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <MUIDataTable
            title={'All List'}
            data={dataCollectibles}
            columns={columnsCollectibles}
            options={options}
          />
        </TabContainer>
      )}
    </div>
  )
}
