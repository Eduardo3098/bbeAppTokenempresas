import {shallow} from 'enzyme';
import React from 'react';
import BusinessMenu from './businessMenu';

describe('Business menu component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BusinessMenu />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
