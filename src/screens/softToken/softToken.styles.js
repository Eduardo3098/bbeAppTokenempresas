import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {FontsList} from '../../res/fonts';
import {ColorPalette} from '../../res/colors';
import {percentageNormalizer} from '../../common/fontUtil';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: hp('5%'),
    alignSelf: 'stretch',
  },
  time: {
    fontSize: percentageNormalizer(12),
    fontFamily: FontsList.PreloMedium,
    color: ColorPalette.secondary,
  },
  close: {
    flexGrow: 0,
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${FontsList.PreloBook};
  font-size: ${percentageNormalizer(28)};
  color: ${ColorPalette.secondary};
  margin-top: ${hp(5)};
`;

const Description = styled.Text`
  font-family: ${FontsList.PreloBook};
  font-size: ${percentageNormalizer(16)};
  color: ${ColorPalette.secondary};
  text-align: center;
  margin-vertical: ${hp(5)};
`;

const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Token = styled.Text`
  font-family: ${FontsList.PreloMedium};
  color: ${ColorPalette.secondary};
  font-size: ${percentageNormalizer(40)};
`;

const SecondaryText = styled.Text`
  font-family: ${FontsList.PreloSemiBold};
  color: ${ColorPalette.strongBlue300};
  font-size: ${percentageNormalizer(12)};
`;

const Time = styled.Text`
  font-family: ${FontsList.PreloMedium};
  color: ${ColorPalette.secondary};
  font-size: ${percentageNormalizer(12)};
  text-align-vertical: center;
`;

const Clock = styled(Icon)`
  color: ${ColorPalette.secondary};
`;

const CopyContainer = styled.TouchableOpacity`
  margin-top: ${hp(3)};
`;

const Copy = styled(Icon)`
  color: ${ColorPalette.strongBlue300};
`;

export default styles;

export {
  Copy,
  CopyContainer,
  Clock,
  Container,
  IconContainer,
  Title,
  Description,
  Token,
  SecondaryText,
  Time,
};
