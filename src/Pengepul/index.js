import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    minHeight: 160,
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: 15,
    margin: 5,
    borderRadius: 15,
    display: "grid",
    alignItems: "center",
    // flexDirection: "column",
  },
  padding: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
    textAlign: "center",
  },
  title: {
    paddingTop: 50,
  },
  menu: {
    textDecoration: "none",
  },
});

function MainPengepul() {
  const classes = useStyles();
  return (
    <div style={{ width: `96%`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Dashboard</Box>
      </Typography>
      <Grid container justify="center" className={classes.padding}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/profile"
          className={classes.menu}
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5">
                <Box>Profil</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/data-petani"
          className={classes.menu}
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              {/* <HomeIcon fontSize="large" /> */}
              <Typography variant="h5">
                <Box>
                  Data
                  <br />
                  Petani
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/data-transaksi"
          className={classes.menu}
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5">
                <Box>
                  Data
                  <br />
                  Transaksi
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/hasil-panen"
          className={classes.menu}
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5">
                <Box>
                  Hasil <br /> Panen
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPengepul;
