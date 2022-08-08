import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Confirmation from './confirmation';
import {boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Alert', module);

stories.add('confirmation', () => (
  <Confirmation visible={boolean('Visible', false)} />
));
