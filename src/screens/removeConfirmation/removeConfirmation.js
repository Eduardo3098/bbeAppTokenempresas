import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Alert from '../../components/alert';
import {Business, Text} from './removeConfirmation.styles';
import strings from '../../res/strings';
import {isFunction} from '../../common/util';

class RemoveConfirmation extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    business: PropTypes.string,
    onCancelPressed: PropTypes.func,
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
    const {visible, business} = this.props;
    return (
      <Alert
        testID="component"
        visible={visible}
        positiveButtonEnabled
        negativeButtonText={strings.common.cancel}
        onNegativeButtonPressed={this.onNegativeButtonPressed}
        positiveButtonText={strings.common.confirm}
        onPositiveButtonPressed={this.onPositiveButtonPressed}
        onRequestClose={this.onRequestClose}>
        <Text>
          {`${strings.business.removeConfirmation} `}
          <Business>{business}</Business>?
        </Text>
      </Alert>
    );
  }
}

export default RemoveConfirmation;
