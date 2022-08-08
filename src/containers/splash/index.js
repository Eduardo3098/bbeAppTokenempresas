import {connect} from 'react-redux';

import Splash from './splash';
import {fetchParams} from '../../state/actions';

const mapStateToProps = ({params: {status}}) => ({
  status,
});

const mapDispatchToProps = {
  fetchParams,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
