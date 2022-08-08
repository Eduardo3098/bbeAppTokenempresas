import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
`;

const Content = styled.View`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: ${wp(5)}px;
  margin-top: ${hp(10)}px;
  ${({style}) => ({...style})}
`;

const Exit = styled.TouchableOpacity`
  flex: 1;
`;

export {Container, Content, Exit};
