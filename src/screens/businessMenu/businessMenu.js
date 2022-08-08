import React, {Component} from 'react';
import BottomSheet from '../../components/bottomSheet';
import {isFunction} from '../../common/util';
import PropTypes from 'prop-types';
import {Item, Options} from './businessMenu.styles';
import strings from '../../res/strings';

const options = [strings.menu.edit, strings.menu.delete, strings.common.close];

class BusinessMenu extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onChangeNamePressed: PropTypes.func,
    onRemovePressed: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onRequestClose() {
    const {onRequestClose} = this.props;
    if (isFunction(onRequestClose)) {
      onRequestClose();
    }
  }

  onItemSelected(index) {
    let callback;

    switch (index) {
      case 0:
        callback = this.props.onChangeNamePressed;
        break;
      case 1:
        callback = this.props.onRemovePressed;
        break;
    }
    this.onRequestClose();

    if (isFunction(callback)) {
      callback();
    }
  }

  renderItem({item, index}) {
    return (
      <Item
        key={`opt-${index}`}
        hasBorder={index !== options.length - 1}
        onPress={() => this.onItemSelected(index)}>
        {item}
      </Item>
    );
  }

  render() {
    const {visible} = this.props;
    return (
      <BottomSheet
        testID="component"
        visible={visible}
        onRequestClose={this.onRequestClose}>
        <Options data={options} renderItem={this.renderItem} />
      </BottomSheet>
    );
  }
}

export default BusinessMenu;
