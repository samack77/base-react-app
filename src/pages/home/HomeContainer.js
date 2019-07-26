import { compose } from "recompose";
import { connect } from 'react-redux';

import HomeView from "./Home";

export default compose(
  connect(
    state => ({
    })
  )
)(HomeView);