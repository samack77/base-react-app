import React from 'react';
import { withStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header';

// pages
import Home from '../../pages/home';

const Layout = ({ classes, isSidebarOpened, toggleSidebar }) => (
  <div className={classes.root}>
    <CssBaseline />
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

const styles = theme => ({
  root: {
    backgroundColor: "red"
  },
});

export default withStyles(styles)(Layout);
