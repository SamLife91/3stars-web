import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Table from '../../components/import/Table'

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
  function createDataCollectibles(
    level,
    itemType,
    beneficiary,
    payer,
    docType,
    uom,
    qty,
    unitPrice,
    payTerms,
    unitPricee,
    currency,
    ppcc,
    amount,
    payments,
    totalInvoice,
    qtyTotal,
    oppositeInv,
    oppositeInvQty,
    source,
    cup,
    goodD
  ) {
    return {
      level,
      itemType,
      beneficiary,
      payer,
      docType,
      uom,
      qty,
      unitPrice,
      payTerms,
      unitPricee,
      currency,
      ppcc,
      amount,
      payments,
      totalInvoice,
      qtyTotal,
      oppositeInv,
      oppositeInvQty,
      source,
      cup,
      goodD
    }
  }
  function createDataCargo(
    transportUnit,
    sealNum,
    containerType,
    pcg,
    packagesType,
    goodsDescription,
    cargoGW,
    mbl,
    t1,
    imo,
    reefer
  ) {
    return {
      transportUnit,
      sealNum,
      containerType,
      pcg,
      packagesType,
      goodsDescription,
      cargoGW,
      mbl,
      t1,
      imo,
      reefer
    }
  }
  const headersListCollectibles = [
    'Level',
    'Item Type',
    'Beneficiary',
    'Payer',
    'Doc Type',
    'UOM',
    'Qty.',
    'Unit Price',
    'Pay terms',
    'Unit Price-',
    'Currency',
    'PP_CC',
    'Amount',
    'Payments',
    'Total Invoice',
    'QTY Total',
    'Opposite inv',
    'Opposite inv.qty.',
    'Source',
    'CUP',
    'Goods D'
  ]
  const rowsListCollectibles = [
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    )
  ]

  const headersListCargo = [
    'Transport Unit',
    'Seal number',
    'Container type',
    'Package',
    'Packages type',
    'Goods description',
    'Cargo GW',
    'MBL',
    'T1',
    'IMO',
    'Reefer'
  ]
  const rowsListCargo = [
    createDataCargo(
      'UETU5326028',
      'C0093621',
      '40HC45G1',
      '144.00',
      'Package',
      'HS CODE:271019 RFCU406',
      '28 224.00',
      'COEU9000405750',
      '',
      '',
      ''
    )
  ]

  const headersListPayables = [
    'Level',
    'Item Type',
    'Beneficiary',
    'Payer',
    'Doc Type',
    'UOM',
    'Qty.',
    'Unit Price',
    'Pay terms',
    'Unit Price-',
    'Currency',
    'PP_CC',
    'Amount',
    'Payments',
    'Total Invoice',
    'QTY Total',
    'Opposite inv',
    'Opposite inv.qty.',
    'Source',
    'CUP',
    'Goods D'
  ]
  const rowsListPayables = [
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    ),
    createDataCollectibles(
      'All',
      'IPS/Security Tax',
      'THREE STARS Ltd',
      'THREE STARS Ltd',
      'Invoice',
      'SHIPMENT',
      2.0,
      15.0,
      'NOT DEFINED',
      '',
      'EUR',
      'CC',
      30.0,
      '',
      '',
      '',
      '',
      '',
      '',
      'com.nbl.business....',
      'Security'
    )
  ]

  const headersListAll = [
    'Transport Unit',
    'Seal number',
    'Container type',
    'Package',
    'Packages type',
    'Goods description',
    'Cargo GW',
    'MBL',
    'T1',
    'IMO',
    'Reefer'
  ]
  const rowsListAll = [
    createDataCargo(
      'UETU5326028',
      'C0093621',
      '40HC45G1',
      '144.00',
      'Package',
      'HS CODE:271019 RFCU406',
      '28 224.00',
      'COEU9000405750',
      '',
      '',
      ''
    )
  ]

  const [headersCollectibles, setHeadersCollectibles] = useState(
    headersListCollectibles
  )
  const [rowsCollectibles, setRowsCollectibles] = useState(rowsListCollectibles)

  const [headersCargo, setHeadersCargo] = useState(headersListCargo)
  const [rowsCargo, setRowsCargo] = useState(rowsListCargo)

  const [headersPayables, setHeadersPayables] = useState(headersListPayables)
  const [rowsPayables, setRowPayables] = useState(rowsListPayables)

  const [headersAll, setHeadersAll] = useState(headersListAll)
  const [rowsAll, setRowsAll] = useState(rowsListAll)
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
          <Table headers={headersCollectibles} rows={rowsCollectibles} />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Table headers={headersCargo} rows={rowsCargo} />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <Table headers={headersPayables} rows={rowsPayables} />
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <Table headers={headersAll} rows={rowsAll} />
        </TabContainer>
      )}
    </div>
  )
}
