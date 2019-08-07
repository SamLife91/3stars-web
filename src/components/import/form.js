import React, { useEffect, useContext, useState, setState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import Boxider from "@material-ui/core/Divider";
import SaveIcon from '@material-ui/icons/Save';
import { ImportContext } from '../../context/TDImportContext';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flex: 1
  },
  dense: {
    marginTop: 15
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    wrap: 'flex-wrap'
  }
}));

const ImportForm = () => {
  const classes = useStyles();

  const context = useContext(ImportContext);
  const { deals, index, row, update } = context;
  console.log(row.first_record_of_b_1.bol_number);
  const [values, setValues] = React.useState({
    type: '',
    booking: '',
    terms: '',
    customer: '',
    shipper: row.parties_concern.shipper_fields
      .map(el => el.shipper_1)
      .toString(),
    consignee: '',
    notifyparty: '',
    pol: '',
    pod: '',
    td: '',
    transshipment: '',
    port: '',
    pod: ''
  });

  const shipp = row.parties_concern.shipper_fields
    .map(el => el.shipper_1)
    .toString();

  useEffect(() => {
    console.log('mounted');
    console.log(values);
    resetValues(values);
  }, [index]);

  const handleChange = name => event => {
    console.log(event.target.value);
    setValues({
      ...values,
      [name]: event.target.value
    });
  };
  const resetValues = values => {
    setValues({
      type: '',
      booking: '',
      terms: '',
      customer: '',
      shipper: '',
      consignee: '',
      notifyparty: '',
      pol: '',
      pod: '',
      td: '',
      transshipment: '',
      port: ''
    });
  };
  return (
    <React.Fragment>
      <form className={classes.container} noValidate autoComplete="off">
        <Box className={classes.row}>
          {/* <TextField
            value={values.type || ''}
            onInput={handleChange('type')}
            className={classes.textField}
            id="DealType"
            label="Deal-type"
            placeholder={row.type}
            style={{ flex: 1 }}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          /> */}
          <TextField
            value={values.booking || ''}
            onInput={handleChange('booking')}
            className={classes.textField}
            id="BookingN"
            label="Booking No:"
            placeholder={row.first_record_of_b_1.bol_number}
            style={{ flex: 1 }}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            value={values.terms || ''}
            onInput={handleChange('terms')}
            className={classes.textField}
            id="FreightTerms"
            label="Freight Terms"
            placeholder={row.first_record_of_b_1.bol_prepaid_or_collect}
            style={{ flex: 1 }}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Box className={classes.row}>
          <TextField
            value={values.customer || ''}
            onInput={handleChange('customer')}
            className={classes.textField}
            id="standard-full-width"
            label="Customer"
            placeholder={row.customer}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.shipper || ''}
            onInput={handleChange('shipper')}
            className={classes.textField}
            id="standard-full-width"
            label="Shipper"
            placeholder={shipp}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.consignee || ''}
            onInput={handleChange('consignee')}
            className={classes.textField}
            id="standard-full-width"
            label="Consignee"
            placeholder={
              // row.parties_concern.consignee_fields[0].consignee_1 || ' '
              row.parties_concern.consignee_fields.lenght
                ? row.parties_concern.consignee_fields[0].consignee_1
                : ' '
            }
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.notifyparty || ''}
            onInput={handleChange('notifyparty')}
            className={classes.textField}
            id="standard-full-width"
            label="Notify Party"
            placeholder={row.notifyparty}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            disabled
          />
        </Box>
        <Box className={classes.row}>
          <TextField
            value={values.pol || ''}
            onInput={handleChange('pol')}
            className={classes.textField}
            id="standard-full-width"
            label="POL"
            placeholder={row.pol}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            value={row.td || ''}
            onInput={handleChange('td')}
            id="TD"
            label="TD"
            type="date"
            // defaultValue="2017-05-24"
            margin="normal"
            // placeholder={row.td}
            className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            value={values.transshipment || ''}
            onInput={handleChange('transshipment')}
            className={classes.textField}
            id="TransShipmentCountry"
            label="Trans-Shipment"
            placeholder="Country"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            value={values.port || ''}
            onInput={handleChange('port')}
            className={classes.textField}
            id="TransShipmentPort"
            label="Trans-Shipment"
            placeholder="Port"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Box className={classes.row}>
          <TextField
            value={values.pod || ''}
            onInput={handleChange('pod')}
            className={classes.textField}
            id="POD"
            label="POD"
            placeholder={row.port_place.bol_port_of_delivery_name}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            value={values.port || ''}
            onInput={handleChange('port')}
            id="POD-PORT"
            label="Port"
            margin="normal"
            className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />

          {/* <TextField
            className={classes.textField}
            id="standard-full-width"
            label="Label"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          /> */}

          <TextField
            value={row.td || ''}
            id="TD"
            label="TD"
            type="date"
            // defaultValue="2017-05-24"
            // defaultValue={row.td}
            margin="normal"
            className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Box style={{ alignSelf: 'flex-end', padding: '5px 10px' }}>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={() => update(index, values)}
          >
            <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default ImportForm;
