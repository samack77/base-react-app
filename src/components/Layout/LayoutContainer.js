import { compose } from 'recompose';
import { connect } from 'react-redux';

import { toggleProp } from './LayoutState';

import LayoutView from './LayoutView';


export default compose(
  connect(
    state => ({
      my_prop: state.layout.my_prop,
    }),
    { toggleProp },
  )
)(LayoutView);