import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Countdown from './countdown';
import {MULTIPLIER_TO_MILLIS} from '../../common/constants';
import strings from '../../res/strings';

storiesOf('Widgets/').add('Counter', () => (
  <Countdown
    finishTime={Date.now() + 120 * MULTIPLIER_TO_MILLIS}
    format={strings.enrollment.otp.sendCodeLinkTemplate}
  />
));
