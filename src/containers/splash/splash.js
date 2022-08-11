import React, {Component} from 'react';

import SplashComponent from '../../screens/splash/splash';
import {isFunction} from '../../common/util';
import {LoadStatus} from '../../common/constants';
import Screens from '../../navigation/screens';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.loadParams = this.loadParams.bind(this);
    this.onAnimationFinish = this.onAnimationFinish.bind(this);

    this.state = {
      animationFinished: false,
    };
  }

  componentDidMount() {
    this.loadParams();
  }

  componentDidUpdate() {
    const {
      navigation: {replace},
      status,
    } = this.props;
    const {animationFinished} = this.state;
    if (status === LoadStatus.DONE && animationFinished) {
      replace(Screens.AddBusinessScreen);
    }
  }

  loadParams() {
    const {fetchParams} = this.props;

    if (isFunction(fetchParams)) {
      fetchParams();
    }
  }

  onAnimationFinish() {
    this.setState({animationFinished: true});
  }

  render() {
    return <SplashComponent onAnimationFinish={this.onAnimationFinish} />;
  }
}

export default Splash;
