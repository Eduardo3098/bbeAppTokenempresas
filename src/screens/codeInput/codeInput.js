import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Alert from '../../components/alert';
import {Input, Text} from './codeInput.styles';
import strings from '../../res/strings';
import {isFunction} from '../../common/util';
import {MAX_CODE_LENGTH} from '../../common/constants';

class CodeInput extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    code: PropTypes.string,
    onCodeChanged: PropTypes.func,
    onCancelPressed: PropTypes.func,
    onAcceptPressed: PropTypes.func,
    onRequestClose: PropTypes.func,
    canContinue: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
    this.onNegativeButtonPressed = this.onNegativeButtonPressed.bind(this);
    this.onPositiveButtonPressed = this.onPositiveButtonPressed.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
  }

  onChangeText(code) {
    const {onCodeChanged} = this.props;

    if (isFunction(onCodeChanged)) {
      onCodeChanged(code);
    }
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
    const {visible, code, canContinue} = this.props;
    return (
      <Alert
        testID="component"
        visible={visible}
        negativeButtonText={strings.common.cancel}
        onNegativeButtonPressed={this.onNegativeButtonPressed}
        positiveButtonText={strings.common.confirm}
        onPositiveButtonPressed={this.onPositiveButtonPressed}
        positiveButtonEnabled={canContinue}
        onRequestClose={this.onRequestClose}>
        <Text>{strings.code.label}</Text>
        <Input
          autofocus
          value={code}
          maxLength={MAX_CODE_LENGTH}
          returnKeyType="done"
          autoCapitalize="characters"
          autoCorrect={false}
          autoCompleteType="off"
          placeholder={strings.code.hint}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onPositiveButtonPressed}
        />
      </Alert>
    );
  }
}

export default CodeInput;
