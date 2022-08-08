import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import AnimatedCircularProgress from './animatedCircularProgress';
import {ColorPalette} from '../../res/colors';

const decoratorStyle = {
  flex: 1,
};

storiesOf('Components/Widgets/CircularProgress')
  .addDecorator((story) => (
    <SafeAreaView style={decoratorStyle}>{story()}</SafeAreaView>
  ))
  .add('default', () => (
    <AnimatedCircularProgress
      size={400}
      width={15}
      prefill={100}
      fill={0}
      duration={10000}
      tintColor={ColorPalette.primary}
      tintColorSecondary={ColorPalette.error}
      useNativeDriver
      resetOnFinish
    />
  ))
  .add('with children', () => (
    <AnimatedCircularProgress
      size={400}
      width={15}
      prefill={100}
      fill={0}
      duration={10000}
      tintColor={ColorPalette.primary}
      tintColorSecondary={ColorPalette.error}
      useNativeDriver
      resetOnFinish>
      <Text>This is a text</Text>
    </AnimatedCircularProgress>
  ));
