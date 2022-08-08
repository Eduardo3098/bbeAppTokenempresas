import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

const BASE_PX_SIZE = 14;
const ANDROID_BASE_PERCENTAGE = 3.75; // WP * 0.0375
const IOS_BASE_PERCENTAGE = 3.65; // WP * 0.0365

const pixelNormalizer = size => `${percentageNormalizer(size)}px`;

const percentageNormalizer = size => {
  const multiplier =
    Platform === 'ios' ? IOS_BASE_PERCENTAGE : ANDROID_BASE_PERCENTAGE;
  return wp(`${(size * multiplier) / BASE_PX_SIZE}%`);
};

export {pixelNormalizer, percentageNormalizer};
