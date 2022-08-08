import React, {Component} from 'react';
import {Modal} from 'react-native';

import styles, {
  ButtonContainer,
  Container,
  Content,
  ContentContainer,
} from './alert.styles';
import PropTypes from 'prop-types';
import Button, {BUTTON_COLORS} from '../button';
import {isEmptyString, isFunction} from '../../common/util';

class Alert extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    positiveButtonText: PropTypes.string,
    onPositiveButtonPressed: PropTypes.func,
    positiveButtonEnabled: PropTypes.bool,
    negativeButtonText: PropTypes.string,
    onNegativeButtonPressed: PropTypes.func,
    onRequestClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderButtons = this.renderButtons.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.onNegativeButtonPressed = this.onNegativeButtonPressed.bind(this);
    this.onPositiveButtonPressed = this.onPositiveButtonPressed.bind(this);
  }

  onNegativeButtonPressed() {
    const {onNegativeButtonPressed} = this.props;

    if (isFunction(onNegativeButtonPressed)) {
      onNegativeButtonPressed();
    }
  }

  onPositiveButtonPressed() {
    const {onPositiveButtonPressed} = this.props;

    if (isFunction(onPositiveButtonPressed)) {
      onPositiveButtonPressed();
    }
  }

  renderButtons() {
    const {
      negativeButtonText,
      onNegativeButtonPressed,
      positiveButtonText,
      onPositiveButtonPressed,
      positiveButtonEnabled,
    } = this.props;
    const hasNegativeButton =
      !isEmptyString(negativeButtonText) && isFunction(onNegativeButtonPressed);
    const hasPositiveButton =
      !isEmptyString(positiveButtonText) && isFunction(onPositiveButtonPressed);

    if (!hasNegativeButton && !hasPositiveButton) {
      return null;
    }

    return (
      <ButtonContainer center={!(hasNegativeButton && hasPositiveButton)}>
        {hasNegativeButton && (
          <Button
            color={BUTTON_COLORS.SECONDARY}
            style={styles.button}
            title={negativeButtonText}
            onPress={this.onNegativeButtonPressed}
          />
        )}
        {hasPositiveButton && (
          <Button
            disabled={!positiveButtonEnabled}
            style={styles.button}
            title={positiveButtonText}
            onPress={this.onPositiveButtonPressed}
          />
        )}
      </ButtonContainer>
    );
  }

  onRequestClose() {
    const {onRequestClose} = this.props;

    if (isFunction(onRequestClose)) {
      onRequestClose();
    }
  }

  render() {
    const {children, visible} = this.props;
    return (
      <Modal
        testID="component"
        transparent
        visible={visible}
        onRequestClose={this.onRequestClose}>
        <Container onPress={this.onRequestClose}>
          <ContentContainer>
            <Content>
              {children}
              {this.renderButtons()}
            </Content>
          </ContentContainer>
        </Container>
      </Modal>
    );
  }
}

export default Alert;
