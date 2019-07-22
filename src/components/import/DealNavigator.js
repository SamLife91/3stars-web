import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ImportContext } from "../../context/TDImportContext";
import Icon from "@material-ui/core/Icon";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

const DealNavigator = props => {
  const context = useContext(ImportContext);
  const { deals, index, count } = context;
  console.log(index);
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <div>
        <Button color="primary">
          <ArrowBackIos />
          prev
        </Button>
        {/* <ArrowBackios /> */}
        {/* <Icon>{navigate}</Icon> */}
      </div>
      {index + 1} / {deals.length}
      <div>
        <Button color="primary" onClick={count}>
          next
          <ArrowForwardIos color="primary" />
        </Button>
      </div>
    </Grid>
  );
};

export default DealNavigator;
