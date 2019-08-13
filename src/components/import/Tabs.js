import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MaterialDatatable from 'material-datatable';
import Warning from '@material-ui/icons/Warning';
import Badge from '@material-ui/core/Badge';

import { ImportContext } from '../../context/TDImportContext';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '40px 0px',
    padding: '24px 0px',
    backgroundColor: theme.palette.background.paper
  },
  padding: {
    padding: theme.spacing(0, 2)
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const context = useContext(ImportContext);
  const { row } = context;
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const columnsCargo = [
    {
      field: 'cargo_sequence_number',
      name: 'Sequence Number',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_cargo_volume_m3',
      name: 'Volume m3',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_cargo_weight_kg',
      name: 'Weight kg',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_cycfs_item',
      name: 'Cycfs item',
      options: {
        width: 150,
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_kind_of_packages',
      name: 'Kind of packages',
      options: {
        width: 150,
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_loading_status',
      name: 'Status',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_loading_status_code',
      name: 'Status code',
      options: {
        width: 150,
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_number',
      name: 'Container number',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_size_and_type_iso_code',
      name: 'Iso code',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'container_tare_weight_kg',
      name: 'Weight/kg',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'is_container_short_shipped',
      name: 'Shipped',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'is_dangerous_container',
      name: 'Dangerous',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return value.is_dangerous_container ? (
            ' '
          ) : (
            <Warning style={{ color: 'red' }} />
          );
        }
      }
    },
    {
      field: 'is_shipper_owned_container',
      name: 'Owned',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'seal_number',
      name: 'Seal number',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'stowage_location',
      name: 'Stowage location',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'tag',
      name: 'Tag',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'unknown',
      name: 'unknown',
      options: {
        headerNoWrap: true,
        width: 100,
        filter: true,
        sort: true
      }
    }
  ];

  const getDataCargo = () => {
    const cargoInContainer = row.cargo_descriptions.map(el =>
      el.cargo_in_containers.map(el => el)
    );
    const level = cargoInContainer.lenght;
    const cargoInContainerFlat = cargoInContainer.flat(level);
    console.log(cargoInContainerFlat);
    return cargoInContainerFlat;
  };

  const dataCargo = getDataCargo();
  const payablesData = row.freight_informations.filter(
    item => item.prepaid_or_collect_code === 'P'
  );
  const collectiblesData = row.freight_informations.filter(
    item => item.prepaid_or_collect_code === 'C'
  );
  const payablesAndCollectiblesColumns = [
    {
      field: 'amount',
      name: 'Amount',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'currency',
      name: 'Currency',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'equivalent_amount',
      name: 'Equivalent Amount',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'exchange_rate',
      name: 'Exchange Rate',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'exchange_to_currency',
      name: 'Exchange to currency',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'freight_charge_code',
      name: 'Freight Charge Code',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'freight_charge_remark',
      name: 'Freight Charge Remark',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'freight_unit_of_quantity',
      name: 'Freight Unit of Quantity',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'payable_at',
      name: 'Rayable at',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'prepaid_or_collect',
      name: 'Prepaid or Collect',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'prepaid_or_collect_code',
      name: 'Prepaid or Collect Code',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'quantity',
      name: 'Quantity',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'rate_of_freight_charge',
      name: 'Rate of Freight Charge',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'sequence_number',
      name: 'Sequence Number',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'tag',
      name: 'Tag',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    },
    {
      field: 'unknown',
      name: 'unknown',
      options: {
        headerNoWrap: true,
        filter: true,
        sort: true
      }
    }
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'scroll'
  };

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
          <Tab
            label={
              <Badge
                className={classes.padding}
                color="primary"
                badgeContent={dataCargo.length}
              >
                cargo
              </Badge>
            }
          />
          <Tab
            label={
              <Badge
                className={classes.padding}
                color="primary"
                badgeContent={collectiblesData.length}
              >
                Collectibles
              </Badge>
            }
          />
          <Tab
            label={
              <Badge
                className={classes.padding}
                color="primary"
                badgeContent={payablesData.length}
              >
                Payables
              </Badge>
            }
          />
          {/* <Tab label="All" /> */}
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
            data={collectiblesData}
            columns={payablesAndCollectiblesColumns}
            options={options}
          />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <MaterialDatatable
            title={'Payables List'}
            data={payablesData}
            columns={payablesAndCollectiblesColumns}
            options={options}
          />
        </TabContainer>
      )}
      {/* {value === 3 && (
        <TabContainer>
          <MaterialDatatable
            title={'All List'}
            data={collectiblesData}
            columns={payablesAndCollectiblesColumns}
            options={options}
          />
        </TabContainer>
      )} */}
    </div>
  );
}
