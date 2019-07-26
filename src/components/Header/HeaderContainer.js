import { compose } from 'recompose';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';

export default compose(
  connect(
    state => ({})
  )
)(HeaderView);