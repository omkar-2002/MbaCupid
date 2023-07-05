import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const UserInfo = ({hobbies, description}) => {
  return (
    <View style={styles.infoView}>
      <Text style={styles.title}>{description}</Text>
      <View style={styles.infoLine}></View>
      <Text style={styles.textCenter}>Personality Type</Text>
      <View style={styles.hobbies}>
        {hobbies.map((item, index) => {
          return (
            <View key={index} style={styles.hobby}>
              <Text style={styles.hobbyTitle}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default UserInfo;
