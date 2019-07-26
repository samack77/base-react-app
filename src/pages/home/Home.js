import React from 'react';
import {
  withStyles
} from "@material-ui/core";

const Home = ({ classes, theme, ...props }) => {
  return (
    <React.Fragment>
      <div>Home page</div>
    </React.Fragment>
  )
};

const styles = theme => ({
});

export default withStyles(styles, { withTheme: true })(Home);
