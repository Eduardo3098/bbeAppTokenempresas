import {connect} from 'react-redux';

import AddBusiness from './addBusiness';

const mapStateToProps = ({params: {url, instructions, tokenDuration}}) => ({
  url,
  instructions,
  tokenDuration,
});

export default connect(mapStateToProps)(AddBusiness);
