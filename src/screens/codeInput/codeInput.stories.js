import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CodeInput from './codeInput';
import {boolean} from '@storybook/addon-knobs';

const stories = storiesOf('Code Input', module);

stories.add('default view', () => (
  <CodeInput visible={boolean('Visible', false)} />
));
