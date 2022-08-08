import {shallow} from 'enzyme';
import React from 'react';
import SoftToken from './softToken';

describe('Softtoken component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SoftToken />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
