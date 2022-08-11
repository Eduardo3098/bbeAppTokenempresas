import styled from 'styled-components/native';
import {FontsList} from '../../res/fonts';
import {ColorPalette} from '../../res/colors';
import {percentageNormalizer} from '../../common/fontUtil';

const Text = styled.Text`
  font-family: ${FontsList.PreloBook};
  color: ${ColorPalette.grayPrincipal};
  font-size: ${percentageNormalizer(14)};
`;

const Input = styled.TextInput`
  border-color: ${ColorPalette.grayLight};
  border-bottom-width: 1px;
  margin-top: 7px;
  padding-vertical: 5px;
  font-size: ${percentageNormalizer(14)};
`;

export {Text, Input};
