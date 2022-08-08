import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Splash from './splash';

const buttonStories = storiesOf('Splash', module);

buttonStories.add('default view', () => <Splash />);
