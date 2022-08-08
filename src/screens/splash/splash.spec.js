import React from 'react';
import {shallow} from 'enzyme';

import Splash from './splash';

jest.mock('lottie-react-native');

describe('Splash screen tests', () => {
  test('Renders correctly', () => {
    let wrapper = shallow(<Splash />);
    let component = wrapper.find({testID: 'splash-animation'});
    expect(component).toHaveLength(1);
  });
});
