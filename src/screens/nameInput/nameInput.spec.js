import {shallow} from 'enzyme';
import React from 'react';
import NameInput from './nameInput';

describe('Code Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NameInput />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
