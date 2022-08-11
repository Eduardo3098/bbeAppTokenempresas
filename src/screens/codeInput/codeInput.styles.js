import styled from 'styled-components/native';
import {FontsList} from '../../res/fonts';
import {ColorPalette} from '../../res/colors';
import {percentageNormalizer} from '../../common/fontUtil';

const Text = styled.Text`
  font-family: ${FontsList.PreloBook};
  font-size: ${percentageNormalizer(14)};
  color: ${ColorPalette.grayPrincipal};
`;

const Input = styled.TextInput`
  font-size: ${percentageNormalizer(14)};
  border-color: ${ColorPalette.grayLight};
  border-bottom-width: 1px;
  margin-top: 7px;
  padding-vertical: 5px;
`;

export {Text, Input};
