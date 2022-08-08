import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Alert from '../../components/alert';
import {Text} from './confirmation.styles';
import strings from '../../res/strings';
import {isFunction} from '../../common/util';

class Confirmation extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    text: PropTypes.string,
    onAcceptPressed: PropTypes.func,
    onRequestClose: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onNegativeButtonPressed = this.onNegativeButtonPressed.bind(this);
    this.onPositiveButtonPressed = this.onPositiveButtonPressed.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
  }

  onNegativeButtonPressed() {
    const {onCancelPressed} = this.props;

    if (isFunction(onCancelPressed)) {
      onCancelPressed();
    }
  }

  onPositiveButtonPressed() {
    const {onAcceptPressed} = this.props;

    if (isFunction(onAcceptPressed)) {
      onAcceptPressed();
    }
  }

  onRequestClose() {
    const {onRequestClose} = this.props;

    if (isFunction(onRequestClose)) {
      onRequestClose();
    }
  }

  render() {
    const {visible, text} = this.props;
    return (
      <Alert
        testID="component"
        visible={visible}
        positiveButtonEnabled
        positiveButtonText={strings.common.accept}
        onPositiveButtonPressed={this.onPositiveButtonPressed}
        onRequestClose={this.onRequestClose}>
        <Text>{text}</Text>
      </Alert>
    );
  }
}

export default Confirmation;
