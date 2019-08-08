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
  const { deals, index, row, update, instruction } = context;
  console.log(row.first_record_of_b_1.bol_number);
  const [values, setValues] = React.useState({
    type: row.first_record_of_b_1.bol_number,
    booking: '',
    terms: '',
    customer: '',
    shipper: '',
    consignee: '',
    notifyparty: '',
    pol: '',
    pod: '',
    ad: '',
    sd: '',
    transshipment: '',
    port: '',
    pod: ''
  });

  const shippmentLB = row.parties_concern.shipper_fields
    .map(el => el.shipper_1)
    .toString();

  const consigneeLB = row.parties_concern.consignee_fields.map(el =>
    Object.values(el).join()
  );
  const notifypartyLB = row.parties_concern.notify_party_fields.map(el =>
    Object.values(el).join()
  );
  console.log(instruction);
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
      ad: '',
      sd: '',
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
            value={values.booking || row.first_record_of_b_1.bol_number}
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
            value={
              values.terms || row.first_record_of_b_1.bol_prepaid_or_collect
            }
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
        </Box>
        <Box className={classes.row}>
          <TextField
            value={values.shipper || shippmentLB}
            onInput={handleChange('shipper')}
            className={classes.textField}
            id="standard-full-width"
            label="Shipper"
            placeholder={shippmentLB}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.consignee || consigneeLB.toString()}
            onInput={handleChange('consignee')}
            className={classes.textField}
            id="standard-full-width"
            label="Consignee"
            placeholder={consigneeLB.toString()}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.notifyparty || notifypartyLB.toString()}
            onInput={handleChange('notifyparty')}
            className={classes.textField}
            id="standard-full-width"
            label="Notify Party"
            placeholder={notifypartyLB.toString()}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            // disabled
          />
        </Box>
        <Box className={classes.row}>
          <TextField
            value={values.pol || row.pol}
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
            value={values.td || instruction.arrival_date}
            onInput={handleChange('ad')}
            id="ARRIVAL-DATE"
            label="Arrival date"
            type="date"
            // defaultValue={instruction.arrival_date}
            margin="normal"
            // placeholder={instruction.arrival_date}
            className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            value={values.transshipment || 'GREECE'}
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
            value={values.port || 'Piraeus'}
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
            value={values.pod || row.port_place.bol_port_of_delivery_name}
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
            value={values.port || row.port_place.bol_port_of_discharge}
            onInput={handleChange('port')}
            id="POD-PORT"
            label="Port"
            margin="normal"
            className={classes.textField}
            placeholder={row.port_place.bol_port_of_discharge}
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
            value={values.sd || instruction.sailing_date}
            id="SAIL-DATE"
            label="Sail date"
            type="date"
            margin="normal"
            className={classes.textField}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Box className={classes.row}>
          <TextField
            value={values.port || instruction.vessel_name}
            onInput={handleChange('vessel')}
            id="VESSEL-NAME"
            label="Vessel name"
            margin="normal"
            className={classes.textField}
            placeholder={instruction.vessel_name}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.port || instruction.vessel_code}
            onInput={handleChange('vessel-code')}
            id="VESSEL-CODE"
            label="Code"
            margin="normal"
            className={classes.textField}
            placeholder={instruction.vessel_code}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            value={values.port || instruction.voyage_number}
            onInput={handleChange('voyage_number')}
            id="VOYAGE-NUMBER"
            label="Voyage Number"
            margin="normal"
            className={classes.textField}
            placeholder={instruction.voyage_number}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Box style={{ alignSelf: 'flex-start', padding: '5px 10px' }}>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={() => update(index, values)}
            disabled
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
