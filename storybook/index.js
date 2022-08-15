import './rn-addons.js';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {configure, getStorybookUI} from '@storybook/react-native';

import {loadStories} from './storyLoader';
import MainProvider from '../src/components/mainProvider';

configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({});

const DecoratedUI = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
    <MainProvider>
      <StorybookUI />
    </MainProvider>
  </SafeAreaView>
);
export default DecoratedUI;
