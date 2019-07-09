import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    // flexWrap: 'wrap',
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flex: 1
    // width: 100,
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%"
  },
  row: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

const ImportForm = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div
        style={{
          margin: 10
        }}
      >
        <TextField
          className={classes.textField}
          id="DealType"
          label="Deal-type"
          placeholder="Deal Type"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          className={classes.textField}
          id="BookingN"
          label="Booking No:"
          placeholder="Booking number"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          className={classes.textField}
          id="FreightTerms"
          label="Freight Terms"
          placeholder="Paid, Prepaid"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            margin: 10
          }}
        >
          <TextField
            className={classes.textField}
            id="standard-full-width"
            label="Customer"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            value={""}
          />
          <TextField
            className={classes.textField}
            id="standard-full-width"
            label="Shipper"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            className={classes.textField}
            id="standard-full-width"
            label="Consignee"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            className={classes.textField}
            id="standard-full-width"
            label="Notify Party"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            disabled
          />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            margin: 10
          }}
        >
          <div className={classes.row}>
            <TextField
              className={classes.textField}
              id="standard-full-width"
              label="POL"
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <TextField
              id="TD"
              label="TD"
              type="date"
              defaultValue="2017-05-24"
              margin="normal"
              className={classes.textField}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <div className={classes.row}>
            <TextField
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
          </div>

          <div className={classes.row}>
            <TextField
              className={classes.textField}
              id="POD"
              label="POD"
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <TextField
              id="POD-PORT"
              label="Port"
              margin="normal"
              className={classes.textField}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <div className={classes.row}>
            <TextField
              className={classes.textField}
              id="standard-full-width"
              label="Label"
              placeholder="Placeholder"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <TextField
              id="TD"
              label="TD"
              type="date"
              defaultValue="2017-05-24"
              margin="normal"
              className={classes.textField}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ImportForm;
