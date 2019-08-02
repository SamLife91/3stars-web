import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import MaterialDatatable from 'material-datatable'

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
      field: 'transportUnit',
      name: 'Transport Unit',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'sealNum',
      name: 'Seal Num',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'containerType',
      name: 'Container Type',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'pcg',
      name: 'pcg',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'packagesType',
      name: 'Packages Type',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'goodsDescription',
      name: 'Goods Description',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'cargoGW',
      name: 'Cargo GW',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'mbl',
      name: 'mbl',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 't1',
      name: 't1',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'imo',
      name: 'imo',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      field: 'reefer',
      name: 'Reefer',
      options: {
        filter: true,
        sort: false
      }
    }
  ]
  const columnsCollectibles = [
    {
      field: 'level',
      name: 'Level',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'itemType',
      name: 'Item Type',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'beneficiary',
      name: 'Beneficiary',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'payer',
      name: 'Payer',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'docType',
      name: 'Doc Type',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'uom',
      name: 'UOM',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'qty',
      name: 'Qty.',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'unitPrice',
      name: 'Unit Price',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'currency',
      name: 'Currency',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'payTerms',
      name: 'Pay terms',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'unitPricee',
      name: 'Unit Price-',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'currency',
      name: 'Currency',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'ppcc',
      name: 'PP_CC',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'amount',
      name: 'Amount',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'payments',
      name: 'Payments',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'totalInvoice',
      name: 'Total Invoice',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'qtyTotal',
      name: 'QTY Total',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'oppositeInv',
      name: 'Opposite inv',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'oppositeInvQty',
      name: 'Opposite inv.qty.',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'source',
      name: 'Source',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'cup',
      name: 'CUP',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      field: 'goodD',
      name: 'Goods D',
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
          <MaterialDatatable
            title={'Cargo List'}
            data={dataCargo}
            columns={columnsCargo}
            options={options}
          />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <MaterialDatatable
            title={'Collectibles List'}
            data={dataCollectibles}
            columns={columnsCollectibles}
            options={options}
          />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <MaterialDatatable
            title={'Payables List'}
            data={dataCargo}
            columns={columnsCargo}
            options={options}
          />
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <MaterialDatatable
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
