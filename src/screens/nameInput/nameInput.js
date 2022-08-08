import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Alert from '../../components/alert';
import {Input, Text} from './nameInput.styles';
import strings from '../../res/strings';
import {isFunction} from '../../common/util';

class NameInput extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    name: PropTypes.string,
    onNameChanged: PropTypes.func,
    onAcceptPressed: PropTypes.func,
    canContinue: PropTypes.bool,
    onCancelPressed: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
    this.onPositiveButtonPressed = this.onPositiveButtonPressed.bind(this);
    this.onNegativeButtonPressed = this.onNegativeButtonPressed.bind(this);
  }

  onChangeText(name) {
    const {onNameChanged} = this.props;

    if (isFunction(onNameChanged)) {
      onNameChanged(name);
    }
  }

  onPositiveButtonPressed() {
    const {onAcceptPressed} = this.props;

    if (isFunction(onAcceptPressed)) {
      onAcceptPressed();
    }
  }

  onNegativeButtonPressed() {
    const {onCancelPressed} = this.props;

    if (isFunction(onCancelPressed)) {
      onCancelPressed();
    }
  }

  render() {
    const {visible, name, canContinue, onCancelPressed} = this.props;
    const isCancellable = isFunction(onCancelPressed);
    const negativeButtonText = isCancellable
      ? strings.common.cancel
      : undefined;
    const negativeButtonCallback = isCancellable
      ? this.onNegativeButtonPressed
      : undefined;

    return (
      <Alert
        testID="component"
        visible={visible}
        negativeButtonText={negativeButtonText}
        onNegativeButtonPressed={negativeButtonCallback}
        positiveButtonText={strings.common.save}
        onPositiveButtonPressed={this.onPositiveButtonPressed}
        positiveButtonEnabled={canContinue}>
        <Text>{strings.business.label}</Text>
        <Input
          autofocus
          value={name}
          maxLength={50}
          autoCapitalize="words"
          returnKeyType="done"
          placeholder={strings.business.hint}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onPositiveButtonPressed}
        />
      </Alert>
    );
  }
}

export default NameInput;
