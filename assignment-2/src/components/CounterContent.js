import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightGrey",
    borderRadius: "10%",
  },

  cardContent: {
    flexGrow: 1,
  },

  btn: {
    margin: theme.spacing(4),
    textDecoration: "none",
    padding: "10px",
    marginLeft: "80px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "40%",
    justifyItems: "centre",
    alignItems: "centre",
  },
}));

function CounterContent(props) {
  const classes = useStyles();
  const [countState, setCountState] = useState(0);

  const id = [1, 2, 3, 4];

  useEffect(() => {
    const counts = setInterval(() => {
      setCountState(countState + 1);
    }, 1);
    return () => {
      clearInterval(counts);
    };
  }, [countState]);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {id.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Counter:-
                    {card}
                  </Typography>
                </CardContent>
                <div className={classes.btn}>{countState}</div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default React.memo(CounterContent);
