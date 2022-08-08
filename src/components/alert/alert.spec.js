import React from 'react';
import {shallow} from 'enzyme';
import Alert from './alert';

describe('Alert component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Alert visible={false} />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
