import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from '../Styles/Header.styles';
import SILogo from '../studio-init-logo.svg';

const Header = () => {
  const classes = useStyles({});

  return (
    <Grid container>
      <Grid item md={3} sm={6} xs={12}>
        <img className={classes.headerLogo} src={SILogo} />
      </Grid>
    </Grid>
  );
};

export default Header;