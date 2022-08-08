import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Animated, Easing} from 'react-native';
import CircularProgress from './circularProgress';
import {isFunction, isValid} from '../../common/util';
import {KEY_MAX_PERCENTAGE} from '../../common/constants';

const ANIMATION_RESET_MILLIS = 1000;

class AnimatedCircularProgress extends PureComponent {
  static propTypes = {
    ...CircularProgress.propTypes,
    fill: PropTypes.number,
    prefill: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    onAnimationComplete: PropTypes.func,
    useNativeDriver: PropTypes.bool,
    resetOnFinish: PropTypes.bool,
  };

  static defaultProps = {
    duration: 30000,
    easing: Easing.out(Easing.linear),
    prefill: 0,
    useNativeDriver: false,
    resetOnFinish: false,
  };

  constructor(props) {
    super(props);

    this.animate = this.animate.bind(this);
    this.reAnimate = this.reAnimate.bind(this);
    this.onAnimationComplete = this.onAnimationComplete.bind(this);
    this.stopAnimation = this.stopAnimation.bind(this);

    const {prefill, onFillChange} = this.props;
    const fillAnimation = new Animated.Value(prefill);

    if (isFunction(onFillChange)) {
      fillAnimation.addListener(({value}) => onFillChange(value));
    }

    this.state = {fillAnimation};
    this.animation = null;
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  onAnimationComplete({finished}) {
    const {onAnimationComplete} = this.props;
    if (finished && isFunction(onAnimationComplete)) {
      onAnimationComplete(this.reAnimate);
    }
  }

  reAnimate(prefill, toVal, dur, ease) {
    const {fillAnimation} = this.state;
    if (isValid(prefill)) {
      fillAnimation.setValue(prefill);
    }

    this.animate(toVal, dur, ease);
  }

  stopAnimation() {
    if (isValid(this.animation) && isFunction(this.animation.stop)) {
      this.animation.stop();
      this.animation = null;
    }
  }

  animate(toVal, dur, ease) {
    const {useNativeDriver, fill, resetOnFinish} = this.props;
    const {fillAnimation} = this.state;
    const toValue = toVal >= 0 ? toVal : fill;
    let {duration, easing} = this.props;
    duration = dur || duration;
    easing = ease || easing;

    this.stopAnimation();

    this.animation = resetOnFinish
      ? Animated.sequence([
          Animated.timing(fillAnimation, {
            toValue,
            useNativeDriver,
            easing: Easing.linear,
            duration: duration - ANIMATION_RESET_MILLIS,
          }),
          Animated.timing(fillAnimation, {
            useNativeDriver,
            toValue: KEY_MAX_PERCENTAGE,
            easing: Easing.out(Easing.ease),
            duration: ANIMATION_RESET_MILLIS,
          }),
        ])
      : Animated.timing(fillAnimation, {
          useNativeDriver,
          toValue,
          easing,
          duration,
        });

    this.animation.start(this.onAnimationComplete);
  }

  render() {
    const {...other} = this.props;
    const {fillAnimation} = this.state;

    return (
      <CircularProgress
        testID="component"
        {...other}
        progress={fillAnimation}
      />
    );
  }
}

export default AnimatedCircularProgress;
