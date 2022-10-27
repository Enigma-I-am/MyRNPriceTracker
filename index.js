/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <BottomSheetModalProvider>
        <PaperProvider>
          <App />
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});

AppRegistry.registerComponent(appName, () => Main);
