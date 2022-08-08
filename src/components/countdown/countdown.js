import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {isFunction} from '../../common/util';
import {MULTIPLIER_TO_MILLIS, STRING_EMPTY} from '../../common/constants';
import styles from './countdown.styles';

class Countdown extends Component {
  static propTypes = {
    finishTime: PropTypes.number.isRequired,
    format: PropTypes.string,
    //style: Text.propTypes.style,
    onFinished: PropTypes.func,
  };

  static defaultProps = {
    format: '{d}:{h}:{m}:{s}',
  };

  constructor(props) {
    super(props);
    this.millisecondsToString = this.millisecondsToString.bind(this);
    this.updateCounter = this.updateCounter.bind(this);

    this.left = null;
    this.state = {
      millisecondsLeft: props.finishTime - Date.now(),
    };
  }

  componentDidMount() {
    this.left = setInterval(this.updateCounter, MULTIPLIER_TO_MILLIS);
  }

  componentWillUnmount() {
    clearInterval(this.left);
  }

  updateCounter() {
    const {finishTime} = this.props;
    this.setState({millisecondsLeft: finishTime - Date.now()});
  }

  millisecondsToString() {
    const {millisecondsLeft} = this.state;
    const {format} = this.props;

    const seconds = millisecondsLeft / 1000 - ((millisecondsLeft / 1000) % 1);
    const minutes = seconds / 60 - ((seconds / 60) % 1);
    const hours = minutes / 60 - ((minutes / 60) % 1);
    const days = hours / 24 - ((hours / 24) % 1);

    if (isNaN(seconds) || isNaN(minutes) || isNaN(hours) || isNaN(days)) {
      return STRING_EMPTY;
    }

    if (millisecondsLeft < 0) {
      const {onFinished} = this.props;

      if (isFunction(onFinished)) {
        onFinished();
      }

      return format
        .replace('{d}', 0)
        .replace('{h}', 0)
        .replace('{m}', this.addZeroIfNeeded(0))
        .replace('{s}', this.addZeroIfNeeded(0));
    }

    return format
      .replace('{d}', days)
      .replace('{h}', hours % 24)
      .replace('{m}', this.addZeroIfNeeded(minutes % 60))
      .replace('{s}', this.addZeroIfNeeded(seconds % 60));
  }

  addZeroIfNeeded(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  render() {
    const {style} = this.props;
    return (
      <Text testID="component" style={[styles.text, style]}>
        {this.millisecondsToString()}
      </Text>
    );
  }
}

export default Countdown;
