import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import styles from './splash.styles';
import {isFunction} from '../../common/util';
import PropTypes from 'prop-types';

const splash = require('../../res/animations/splash');

export default class Splash extends Component {
  static propTypes = {
    onAnimationFinish: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.initAnimation = this.initAnimation.bind(this);
    this.onAnimationFinish = this.onAnimationFinish.bind(this);

    this.animation = null;
  }

  componentDidMount() {
    this.initAnimation();
  }

  initAnimation() {
    if (!this.animation) {
      setTimeout(() => {
        this.initAnimation();
      }, 50);
    } else {
      this.animation.play();
    }
  }

  onAnimationFinish() {
    const {onAnimationFinish} = this.props;

    if (isFunction(onAnimationFinish)) {
      onAnimationFinish();
    }
  }

  render() {
    return (
      <LottieView
        testID="splash-animation"
        style={styles.container}
        resizeMode="cover"
        ref={animation => {
          this.animation = animation;
        }}
        onAnimationFinish={this.onAnimationFinish}
        source={splash}
        loop={false}
        autoPlay={false}
      />
    );
  }
}
