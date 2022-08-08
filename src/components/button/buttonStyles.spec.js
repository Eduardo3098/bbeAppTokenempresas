import React from 'react';
import renderer from 'react-test-renderer';

import {Container, Text} from './buttonStyles';
import {BUTTON_COLORS} from './constants';

describe('Button components', () => {
  it('should render primary ButtonContainer successfully', () => {
    const component = <Container color={BUTTON_COLORS.PRIMARY} />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render primary disabled ButtonContainer successfully', () => {
    const component = <Container color={BUTTON_COLORS.PRIMARY} disabled />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render primary with status ButtonContainer successfully', () => {
    const component = <Container status="WAIT" color={BUTTON_COLORS.PRIMARY} />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render secondary ButtonContainer successfully', () => {
    const component = <Container color={BUTTON_COLORS.SECONDARY} />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render secondary disabled ButtonContainer successfully', () => {
    const component = <Container color={BUTTON_COLORS.SECONDARY} disabled />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render ButtonText successfully', () => {
    const component = <Text />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render ButtonText disabled successfully', () => {
    const component = <Text disabled />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
