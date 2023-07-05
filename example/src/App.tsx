import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import useVersion from 'react-native-build-vesion-getter';

export default function App() {
  const { name, code, done } = useVersion();

  return (
    <View style={styles.container}>
      <Text>
        version name: {name}, version code: {code}, done: {done ? 'YES' : 'NO'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
