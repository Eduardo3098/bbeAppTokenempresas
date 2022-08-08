import React, {Component} from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Content, Exit} from './bottomSheet.styles';
import {isFunction} from '../../common/util';

class BottomSheet extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    contentStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array,
    ]),
    closeStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array,
    ]),
    onRequestClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onRequestClose = this.onRequestClose.bind(this);
  }

  onRequestClose() {
    const {onRequestClose} = this.props;

    if (isFunction(onRequestClose)) {
      onRequestClose();
    }
  }

  render() {
    const {visible, children, contentStyle, closeStyle} = this.props;
    return (
      <Modal
        transparent
        testID="component"
        visible={visible}
        onRequestClose={this.onRequestClose}>
        <Container>
          <Exit style={closeStyle} onPress={this.onRequestClose} />
          <Content style={contentStyle}>{children}</Content>
        </Container>
      </Modal>
    );
  }
}

export default BottomSheet;
