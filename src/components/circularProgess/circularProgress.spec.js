import React from 'react';
import {Animated} from 'react-native';
import {shallow} from 'enzyme';

import AnimatedCircularProgress from './animatedCircularProgress';
import CircularProgress from './circularProgress';

describe('Circular progress component tests', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <CircularProgress progress={new Animated.Value(0)} />,
    );
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});

describe('Animated circular progress component tests', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<AnimatedCircularProgress />);
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
