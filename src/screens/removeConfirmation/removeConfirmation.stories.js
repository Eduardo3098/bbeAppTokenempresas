import React from 'react';
import {storiesOf} from '@storybook/react-native';
import RemoveConfirmation from './removeConfirmation';
import {boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Code Input', module);

stories.add('default view', () => (
  <RemoveConfirmation visible={boolean('Visible', false)} />
));
