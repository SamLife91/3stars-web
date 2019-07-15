import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}))

function createData(
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
const headers = [
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
const rows = [
  createData(
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
  createData(
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
  createData(
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
  createData(
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
  createData(
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
export default function DenseTable() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              {headers.map(item => (
                <TableCell align="right" key={item}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow>
                {Object.values(row).map(item => (
                  <TableCell>{item}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
