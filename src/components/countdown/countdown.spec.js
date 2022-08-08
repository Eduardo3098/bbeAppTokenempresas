import {shallow} from 'enzyme';
import React from 'react';
import Countdown from './countdown';

describe('Countdown widget', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Countdown />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
