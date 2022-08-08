import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, withKnobs} from '@storybook/addon-knobs';

import Alert from './alert';
import {noop} from '../../common/util';

const stories = storiesOf('Alert', module);
stories.addDecorator(withKnobs);

stories.add('default view', () => (
  <Alert visible={boolean('Visible', false)} />
));

stories.add('negative only view', () => (
  <Alert
    visible={boolean('Visible', false)}
    negativeButtonText="negative"
    onNegativeButtonPressed={noop}
  />
));

stories.add('positive only view', () => (
  <Alert
    visible={boolean('Visible', false)}
    positiveButtonText="positive"
    onPositiveButtonPressed={noop}
  />
));

stories.add('two buttons view', () => (
  <Alert
    visible={boolean('Visible', false)}
    negativeButtonText="negative"
    onNegativeButtonPressed={noop}
    positiveButtonText="positive"
    onPositiveButtonPressed={noop}
  />
));
