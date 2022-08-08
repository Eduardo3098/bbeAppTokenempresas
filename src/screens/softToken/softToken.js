import React, {Component} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import styles, {
  Clock,
  Container,
  Copy,
  CopyContainer,
  Description,
  IconContainer,
  SecondaryText,
  Time,
  Title,
  Token,
} from './softToken.styles';
import BottomSheet from '../../components/bottomSheet';
import Button from '../../components/button';
import strings from '../../res/strings';
import PropTypes from 'prop-types';
import {isFunction} from '../../common/util';
import CircularProgress from '../../components/circularProgess';
import {ColorPalette} from '../../res/colors';
import Countdown from '../../components/countdown';

class SoftToken extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    token: PropTypes.string,
    tokenProgress: PropTypes.number,
    tokenTimeLeft: PropTypes.number,
    onBackPress: PropTypes.func,
    onCopyPress: PropTypes.func,
    onAnimationComplete: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
    this.onCopyPress = this.onCopyPress.bind(this);
    this.onAnimationComplete = this.onAnimationComplete.bind(this);
  }

  onBackPress() {
    const {onBackPress} = this.props;
    if (isFunction(onBackPress)) {
      onBackPress();
    }
  }

  onCopyPress() {
    const {onCopyPress} = this.props;
    if (isFunction(onCopyPress)) {
      onCopyPress();
    }
  }

  onAnimationComplete(reanimate) {
    const {onAnimationComplete} = this.props;
    if (isFunction(onAnimationComplete)) {
      onAnimationComplete(reanimate);
    }
  }

  render() {
    const {visible, token, tokenProgress, tokenTimeLeft} = this.props;
    const countDowntime = Date.now() + tokenTimeLeft;

    return (
      <BottomSheet
        visible={visible}
        contentStyle={styles.container}
        closeStyle={styles.close}
        testID="component">
        <Container>
          <Title>{strings.token.title}</Title>
          <Description>{strings.token.description}</Description>
          <Container>
            <CircularProgress
              fill={0}
              size={wp(50)}
              width={15}
              useNativeDriver
              prefill={tokenProgress}
              duration={tokenTimeLeft}
              onAnimationComplete={this.onAnimationComplete}
              tintColor={ColorPalette.primary}
              tintColorSecondary={ColorPalette.error}>
              <Token>{token}</Token>
              <IconContainer>
                <Clock name="timer" />
                <Time>{strings.token.expires}</Time>
                <Countdown
                  finishTime={countDowntime}
                  format="{m}:{s}"
                  style={styles.time}
                />
              </IconContainer>
            </CircularProgress>
          </Container>
          <CopyContainer onPress={this.onCopyPress}>
            <IconContainer>
              <Copy name="content-copy" />
              <SecondaryText>{strings.token.copy}</SecondaryText>
            </IconContainer>
          </CopyContainer>
        </Container>
        <Button
          style={styles.button}
          title={strings.common.back}
          onPress={this.onBackPress}
        />
      </BottomSheet>
    );
  }
}

export default SoftToken;
