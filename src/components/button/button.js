import React from 'react';
import PropTypes from 'prop-types';

import {Container, Text} from './buttonStyles';
import {BUTTON_COLORS} from './constants';
import {AccessibilityRole} from '../../common/constants';

const Button = ({title, color, onPress, style, ref, disabled, ...props}) => (
  <Container
    ref={ref}
    style={style}
    color={color}
    disabled={disabled}
    onPress={onPress}
    accessibilityRole={AccessibilityRole.BUTTON}
    {...props}>
    <Text disabled={disabled}>{title}</Text>
  </Container>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  status: PropTypes.string,
};

Button.defaultProps = {
  color: BUTTON_COLORS.PRIMARY,
  disabled: false,
  status: undefined,
};

export default Button;
