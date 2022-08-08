import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {ColorPalette} from '../../res/colors';
import {FontsList} from '../../res/fonts';
import {pixelNormalizer} from '../../common/fontUtil';
import {BUTTON_COLORS} from './constants';

const getButtonBackgroundColor = ({color, disabled}) => {
  if (color === BUTTON_COLORS.PRIMARY) {
    return disabled ? ColorPalette.primaryDisabled : ColorPalette.primary;
  }
  return ColorPalette.darkGrayishBlue200;
};

const getButtonBorderColor = ({color, disabled}) => {
  if (color === BUTTON_COLORS.PRIMARY) {
    return disabled ? ColorPalette.primaryDisabled : ColorPalette.primary;
  }
  return disabled
    ? ColorPalette.darkGrayishBlue200
    : ColorPalette.darkGrayishBlue;
};

const Container = styled.TouchableOpacity`
  background-color: ${getButtonBackgroundColor};
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${getButtonBorderColor};
  width: auto;
  min-width: 120px;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
`;

const getTextColor = ({disabled}) =>
  disabled ? ColorPalette.secondaryDisabled : ColorPalette.secondary;

const Text = styled.Text`
  color: ${getTextColor};
  font-family: ${FontsList.PreloSemiBold};
  font-size: ${pixelNormalizer(14)};
`;

export {Container, Text};
