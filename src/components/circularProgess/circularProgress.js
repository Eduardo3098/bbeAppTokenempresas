import React from 'react';
import {Animated, Dimensions, View} from 'react-native';
import Svg, {
  Circle,
  Defs,
  ForeignObject,
  G,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import PropTypes from 'prop-types';

import {isValid} from '../../common/util';
import styles from './circularProgress.styles';

const {width: windowWidth} = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const {PI} = Math;

const CircularProgress = ({
  progress,
  tintColor,
  tintColorSecondary,
  strokeLinecap,
  backgroundColor,
  size,
  width,
  children,
  style,
  childrenContainerStyle,
}) => {
  const contentSize = size - width;
  const r = contentSize / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = r * 2 * PI;
  const angle = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [PI * 2, 0],
  });
  const strokeDashoffset = Animated.multiply(angle, r);

  const tintOpacity = 1;
  let tintOpacitySecondary = 0;

  if (isValid(tintColorSecondary)) {
    tintOpacitySecondary = progress.interpolate({
      inputRange: [0, 20, 40, 100],
      outputRange: [1, 0.8, 0.1, 0],
    });
  }

  const contentStyle = {
    width: contentSize,
    height: contentSize,
    transform: [],
  };

  return (
    <Svg testID="component" width={size} height={size} style={style}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor={tintColor} />
          <Stop offset="1" stopColor={tintColorSecondary} />
        </LinearGradient>
      </Defs>
      {isValid(backgroundColor) && (
        <Circle
          stroke={backgroundColor}
          fill="none"
          {...{
            strokeWidth: width,
            cx,
            cy,
            r,
          }}
        />
      )}
      <G rotation={270} originX={cx} originY={cy}>
        <AnimatedCircle
          stroke={tintColor}
          strokeOpacity={tintOpacity}
          fill="none"
          strokeDasharray={`${circumference}, ${circumference}`}
          {...{
            strokeDashoffset,
            strokeWidth: width,
            cx,
            cy,
            r,
            strokeLinecap,
          }}
        />
        {isValid(tintColorSecondary) && (
          <AnimatedCircle
            stroke="url(#grad)"
            strokeOpacity={tintOpacitySecondary}
            fill="none"
            strokeDasharray={`${circumference}, ${circumference}`}
            {...{
              strokeDashoffset,
              strokeWidth: width,
              cx,
              cy,
              r,
              strokeLinecap,
            }}
          />
        )}
      </G>
      <ForeignObject
        x={width / 2}
        y={width / 2}
        width={contentSize}
        height={contentSize}>
        <View style={[contentStyle, styles.content, childrenContainerStyle]}>
          {children}
        </View>
      </ForeignObject>
    </Svg>
  );
};

CircularProgress.propTypes = {
  progress: PropTypes.object,
  tintColor: PropTypes.string,
  tintColorSecondary: PropTypes.string,
  strokeLinecap: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  childrenContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

CircularProgress.defaultProps = {
  strokeLinecap: 'round',
  size: windowWidth - 32,
  width: 50,
};

export default CircularProgress;
