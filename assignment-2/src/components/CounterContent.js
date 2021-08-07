import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    display: "inline",
    flexDirection: "row",
    order: 3,
    marginTop: theme.spacing(5),

    // paddingTop: theme.spacing(8),
    // paddingBottom: theme.spacing(8),
  },
  card: {
    width: "100%",
    height: "auto",
    display: "flex",
    padding: "10px",
    margin: "5px",
    flexWrap: "Wrap",
    backgroundColor: "lightGrey",
  },

  cardContent: {
    flexGrow: 1,
    textAlign: "left",
    paddingLeft: "30px",
    margin: "5px",
    flexDirection: "column",
    flex: "50%",
  },

  btn: {
    margin: theme.spacing(4),
    textDecoration: "none",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
}));
function CounterContent(props) {
  const classes = useStyles();
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    const counts = setInterval(() => {
      setCountState(countState + 1);
    }, 100);
    return () => {
      clearInterval(counts);
    };
  }, [countState]);

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={4} grid-gutter-width="30 px" grid-columns="1">
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h4" component="h1">
                Counter:-
                {props.id}
              </Typography>
            </CardContent>
            <div className={classes.btn}>{countState}</div>
          </Card>
        </Grid>
      </Card>
    </div>
  );
}

export default React.memo(CounterContent);
