import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { ImportContext } from "../../context/TDImportContext";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

const DealNavigator = props => {
  const context = useContext(ImportContext);
  const { deals, index, count } = context;
  const maxLimit = deals.length;
  console.log(index);
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <div>
        <Button
          color="primary"
          disabled={index < 1}
          onClick={() => count("decrement")}
        >
          <ArrowBackIos className={index < 1 ? "colorDisabled" : "primary"} />
          prev
        </Button>
      </div>
      {index + 1} / {deals.length}
      <div>
        <Button
          color="primary"
          disabled={index + 1 === maxLimit}
          onClick={() => count("increment")}
        >
          next
          <ArrowForwardIos
            className={index + 1 === maxLimit ? "colorDisabled" : "primary"}
          />
        </Button>
      </div>
    </Grid>
  );
};

export default DealNavigator;
