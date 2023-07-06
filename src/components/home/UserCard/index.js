import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Propic from '../../../assets/images/userProfile.png';
import LinkedIn from '../../../assets/images/LinkedIn.png';
import styles from './styles';

const UserCard = ({title, age, interest,onPressPhoto}) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity onPress={onPressPhoto} activeOpacity={0.6} style={styles.imgView}>
        <Image source={Propic} style={styles.img} resizeMode="cover" />
      </TouchableOpacity>
      <View>
        <View style={styles.nameView}>
          <Text numberOfLines={1} style={styles.titleName}>
            {title}
          </Text>
          <Text style={styles.age}>{age} years</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            {interest.map((item, index) => {
              return (
                <Text key={index} style={styles.interest}>
                  {item}
                </Text>
              );
            })}
          </View>
          <TouchableOpacity>
            <Image source={LinkedIn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
