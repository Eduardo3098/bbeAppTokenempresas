import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {ColorPalette} from '../../res/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {percentageNormalizer} from '../../common/fontUtil';

const styles = StyleSheet.create({
  name: {
    flex: 1,
  },
  button: {
    marginHorizontal: 16,
    minWidth: wp(15),
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 7,
    paddingRight: 7,
  },
  icon: {
    color: ColorPalette.secondary,
    fontSize: 24,
  },
  item: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderColor: 'rgba(221, 221, 221, 0.8)',
    shadowColor: ColorPalette.grayPrincipal,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
});

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-horizontal: ${wp('5%')};
  padding-vertical: ${hp('5%')};
`;

const Content = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  color: ${ColorPalette.secondary};
  font-size: ${percentageNormalizer(28)};
  font-weight: bold;
`;

const Description = styled.Text`
  color: ${ColorPalette.secondary};
  margin-vertical: ${hp('2%')};
  font-size: ${percentageNormalizer(14)};
`;

const Text = styled.Text`
  color: ${ColorPalette.secondary};
  font-size: ${percentageNormalizer(14)};
`;

const BusinessList = styled.FlatList`
  margin-top: 16;
  overflow: visible;
`;

const Business = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${ColorPalette.white};
  padding: ${wp(5)}px;
  margin-bottom: ${hp(2)};
`;

export default styles;

export {BusinessList, Description, Container, Content, Title, Text, Business};
