import React from 'react';
import {shallow} from 'enzyme';
import Button from './button';

describe('Button component tests', () => {
  test('Should render correctly with primary color', () => {
    const snapshot = shallow(<Button title="TITLE" onPress={jest.fn()} />);
    expect(snapshot).toMatchSnapshot();
  });
  test('Should render correctly with primary color loading', () => {
    const snapshot = shallow(
      <Button status="WAIT" title="TITLE" onPress={jest.fn()} />,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
