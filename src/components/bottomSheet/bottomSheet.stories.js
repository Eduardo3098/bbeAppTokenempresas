import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import BottomSheet from './bottomSheet';

const stories = storiesOf('Bottom sheet', module);
stories.addDecorator(withKnobs);

stories.add('default view', () => (
  <BottomSheet visible={boolean('Visible', false)} />
));
stories.add('full size view', () => (
  <BottomSheet visible={boolean('Visible', false)} contentStyle={{flex: 1}} />
));
