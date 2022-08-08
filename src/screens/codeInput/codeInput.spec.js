import {shallow} from 'enzyme';
import React from 'react';
import CodeInput from './codeInput';

describe('Code Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CodeInput />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
