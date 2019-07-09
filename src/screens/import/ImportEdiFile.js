import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Dropzone from "../../components/import/Dropzone";
import ListEdiFile from "../../components/import/ListEdiFile";
import ReviewEdiFile from "../../components/import/form";

import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(5, 0)
  }
}));

const ImportEdifile = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>

      <Paper className={classes.root}>
        <Dropzone />
      </Paper>

      <Paper className={classes.root}>
        <ReviewEdiFile />
        <Divider />
        <ListEdiFile />
      </Paper>
    </Container>
  );
};

export default ImportEdifile;
