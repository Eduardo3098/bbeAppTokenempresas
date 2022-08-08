import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MainProvider from './components/mainProvider';
import Navigation from './navigation';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <MainProvider>
          <Navigation />
        </MainProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
