import { makeStyles, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import mainImage from "./assets/photoprinter_01.png";
import subHeader from "./assets/photoprinter_02.png";
import storeButton from "./assets/store.png";
import downloadButton from "./assets/download.png";

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  grid: {
    margin: 0,
    width: "100%",
    paddingTop: 0,
  },
  mainImage: {
    backgroundColor: "unset",
    maxHeight: "40vh",
  },
  subHeader: {
    backgroundColor: "unset",
    maxHeight: "15vh",
  },
});

const Redirect = () => {
  const classes = useStyles();
  const [android, setAndroid] = useState(true);

  useEffect(() => {
    getMobileOperatingSystem();
  }, []);

  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setAndroid(true);
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.replace("https://apps.apple.com/app/id/1541084292");
    }
  };

  const handlePlayStore = () => {
    window.location.replace("https://play.google.com/store/apps/details?id=cc.smarnet.wippyprint&hl=en_US&gl=US");
  };

  const handleAPK = () => {
    window.location.replace("https://global.ggimage.com/photoprinter/ggphoto_v1.0.1.6-reinforce.apk");
  };

  return (
    <div className={classes.root}>
      {android ? (
        <Grid
          className={classes.grid}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <Paper className={classes.mainImage} component="img" elevation={0} src={mainImage} />
          </Grid>
          <Grid item>
            <Paper className={classes.subHeader} component="img" elevation={0} src={subHeader} />
          </Grid>
          <Grid item>
            <Paper component="img" elevation={0} src={storeButton} onClick={handlePlayStore} />
          </Grid>
          <Grid item>
            <Paper component="img" elevation={0} src={downloadButton} onClick={handleAPK} />
          </Grid>
        </Grid>
      ) : (
        <p>Redirect</p>
      )}
    </div>
  );
};

export default Redirect;
