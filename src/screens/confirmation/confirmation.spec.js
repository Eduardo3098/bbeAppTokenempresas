import {shallow} from 'enzyme';
import React from 'react';
import RemoveConfirmation from '../removeConfirmation';

describe('Code Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RemoveConfirmation />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
