import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {ColorPalette} from '../../res/colors';

const styles = StyleSheet.create({
  button: {
    width: wp(30),
    minWidth: wp(20),
    maxWidth: 150,
  },
});

const Container = styled.TouchableHighlight`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.TouchableWithoutFeedback``;

const Content = styled.View`
  width: ${wp(80)};
  min-height: 20%;
  justify-content: center;
  background-color: white;
  border-color: ${ColorPalette.grayPrincipal}
  border-bottom-left-radius: 20px;
  padding: ${wp(5)}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: ${({center}) => (center ? 'center' : 'space-between')};
  align-items: center;
  align-self: center;
  width: 90%;
  margin-top: 16px;
`;

export default styles;

export {ButtonContainer, Content, ContentContainer, Container};
