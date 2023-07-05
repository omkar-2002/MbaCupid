import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const Liked = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Liked</Text>
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: Colors.white},
});
