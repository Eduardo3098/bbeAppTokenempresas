import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean} from '@storybook/addon-knobs';
import SoftToken from './softToken';

const stories = storiesOf('Soft token', module);

stories.add('default view', () => (
  <SoftToken
    visible={boolean('Visible', false)}
    token="123456"
    tokenProgress={80}
    tokenTimeLeft={25000}
  />
));
