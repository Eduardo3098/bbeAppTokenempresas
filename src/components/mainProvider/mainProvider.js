import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import theme from '../../res/theme';
import {Provider} from 'react-redux';
import store from '../../state';

const MainProvider = props => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{props.children}</Provider>
    </ThemeProvider>
  );
};

export default MainProvider;
