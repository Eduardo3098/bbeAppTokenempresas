import styled from 'styled-components/native';
import {FontsList} from '../../res/fonts';
import {ColorPalette} from '../../res/colors';
import {percentageNormalizer} from '../../common/fontUtil';

const Text = styled.Text`
  font-family: ${FontsList.PreloBook};
  color: ${ColorPalette.grayPrincipal};
  font-size: ${percentageNormalizer(14)};
`;

const Business = styled.Text`
  font-weight: bold;
`;

export {Text, Business};
