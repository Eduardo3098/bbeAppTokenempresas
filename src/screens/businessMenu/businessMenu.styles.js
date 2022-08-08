import styled from 'styled-components/native';

import {ColorPalette} from '../../res/colors';
import {percentageNormalizer} from '../../common/fontUtil';

const Options = styled.FlatList`
  flex-grow: 0;
`;

const Item = styled.Text`
  color: ${ColorPalette.secondary};
  border-bottom-width: ${({hasBorder}) => (hasBorder ? 1 : 0)};
  border-bottom-color: ${ColorPalette.graySecondary};
  padding-vertical: 16;
  font-size: ${percentageNormalizer(14)};
`;

export {Options, Item};
