import {Platform, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  fontPreloBlack: {
    fontFamily: 'Prelo-Black',
  },
  fontPreloBook: {
    fontFamily: 'Prelo-Book',
  },
  fontPreloExbd: {
    fontFamily: 'Prelo-Exbd',
  },
  fontPreloExtraLight: {
    fontFamily: 'Prelo-ExtraLight',
  },
  fontPreloBold: {
    fontFamily: 'Prelo-Bold',
  },
  fontPreloLight: {
    fontFamily: 'Prelo-Light',
  },
  fontPreloMedium: {
    fontFamily: 'Prelo-Medium',
  },
  fontPreloSemiBold: {
    fontFamily: 'Prelo-SemiBold',
  },
  fontPreloSlabBold: {
    fontFamily: 'PreloSlab-Bold',
  },
  fontPreloSlabBook: {
    fontFamily: 'PreloSlab-Book',
  },
  fontPreloSlabExbd: {
    fontFamily: 'PreloSlab-Exbd',
  },
  fontPreloSlabLight: {
    fontFamily: 'PreloSlab-Light',
  },
  fontPreloSlabSemiBold: {
    fontFamily: 'PreloSlab-SemiBold',
  },
  fontSize12: {
    fontSize: Platform.OS === 'ios' ? wp('3.13%') : wp('3,21%'),
  },
  fontSize14: {
    fontSize: Platform.OS === 'ios' ? wp('3.65%') : wp('3.75%'),
  },
  fontSize15: {
    fontSize: Platform.OS === 'ios' ? wp('3.91%') : wp('4,02%'),
  },
  fontSize16: {
    fontSize: Platform.OS === 'ios' ? wp('4.17%') : wp('4,29%'),
  },
  fontSize17: {
    fontSize: Platform.OS === 'ios' ? wp('4.43%') : wp('4.55%'),
  },
  fontSize18: {
    fontSize: Platform.OS === 'ios' ? wp('4.69%') : wp('4.82%'),
  },
  fontSize20: {
    fontSize: Platform.OS === 'ios' ? wp('5.21%') : wp('5.36%'),
  },
  fontSize22: {
    fontSize: Platform.OS === 'ios' ? wp('5.74%') : wp('5.89%'),
  },
  fontSize24: {
    fontSize: Platform.OS === 'ios' ? wp('6.26%') : wp('6.43%'),
  },
  fontSize27: {
    fontSize: Platform.OS === 'ios' ? wp('7.04%') : wp('7.23%'),
  },
  fontSize30: {
    fontSize: Platform.OS === 'ios' ? wp('7.82%') : wp('8.04%'),
  },
  fontSize32: {
    fontSize: Platform.OS === 'ios' ? wp('8.34%') : wp('8.57%'),
  },
  fontSize40: {
    fontSize: Platform.OS === 'ios' ? wp('10.43%') : wp('10.71%'),
  },
  fontSize45: {
    fontSize: Platform.OS === 'ios' ? wp('11.73%') : wp('12.05%'),
  },
  fontSize50: {
    fontSize: Platform.OS === 'ios' ? wp('13.04%') : wp('13.39%'),
  },
});

export const FontsList = {
  PreloBook: 'Prelo-Book',
  PreloBold: 'Prelo-Bold',
  PreloMedium: 'Prelo-Medium',
  PreloSemiBold: 'Prelo-SemiBold',
  PreloSlabBook: 'PreloSlab-Book',
  PreloSlabSemiBold: 'PreloSlab-SemiBold',
};
