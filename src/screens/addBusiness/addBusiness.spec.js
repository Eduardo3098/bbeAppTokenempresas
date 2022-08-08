import React from 'react';
import {shallow} from 'enzyme';

import AddBusiness from './addBusiness';
import instructions from '../../res/instructions';

describe('Add Business screen tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddBusiness instructions={instructions} />);
  });

  test('Renders correctly', () => {
    expect(wrapper.find({testID: 'container'})).toHaveLength(1);
  });

  test('Renders add button', () => {
    expect(wrapper.find({testID: 'button'})).toHaveLength(1);
  });

  test('Calls add button callback', () => {
    const onAddPressed = jest.fn();
    wrapper = shallow(
      <AddBusiness instructions={instructions} onAddPressed={onAddPressed} />,
    );
    const button = wrapper.find({testID: 'button'}).first();
    button.simulate('press');

    expect(onAddPressed).toHaveBeenCalledTimes(1);
  });

  test('Renders list when data not empty', () => {
    wrapper = shallow(<AddBusiness instructions={instructions} data={[{}]} />);
    expect(wrapper.find({testID: 'list'})).toHaveLength(1);
  });
});
