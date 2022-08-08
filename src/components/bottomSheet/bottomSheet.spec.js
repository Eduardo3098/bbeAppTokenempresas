import React from 'react';
import {shallow} from 'enzyme';
import BottomSheet from './bottomSheet';

describe('Bottom sheet component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BottomSheet visible={false} />);
  });

  test('renders correctly', () => {
    expect(wrapper.find({testID: 'component'})).toHaveLength(1);
  });
});
