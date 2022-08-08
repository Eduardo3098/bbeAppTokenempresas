import React from 'react';
import {storiesOf} from '@storybook/react-native';
import NameInput from './nameInput';
import {boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Name Input', module);

stories.add('default view', () => (
  <NameInput visible={boolean('Visible', false)} />
));
