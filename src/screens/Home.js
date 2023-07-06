import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import UserCard from '../components/home/UserCard';
import UserInfo from '../components/home/UserInfo';
import profile from '../assets/images/profileHeader.png';
import Hamburger from '../assets/images/Hamburger.png';
import ActiveSubtract from '../assets/svgImages/ActiveSubtract.svg';

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.styleContainer}>
      <UserCard
        title={'Manish Mandal'}
        age={24}
        interest={['Product Manager', 'Forbes Advisor']}
      />

      <UserInfo
        description={
          "I'm a curious and geeky person with a romantic side. When I'm not exploring new ideas or tinkering with tech, I love spending time with my family, who mean everything to me."
        }
        hobbies={[
          {title: '🤪Funny'},
          {title: '🤗Generous'},
          {title: '🦠Germaphobe'},
          {title: '👶Good with Kids'},
          {title: '🙈Introvert'},
        ]}
      />
    </ScrollView>
  );
};

export default Home;

export const HomeOptions = ({navigation}) => {
  return {
    headerTitle: '',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerLeft: () => (
      <View style={{flexDirection: 'row', marginLeft: 30}}>
        <TouchableOpacity style={{width: 36, height: 36, marginRight: 10}}>
          <Image source={profile} style={{height: '100%', width: '100%'}} />
        </TouchableOpacity>
        <View>
          <Text style={{color: Colors.white}}>Hey,</Text>
          <Text style={{color: Colors.hobbies}}>Natsha</Text>
        </View>
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity style={{width: 20, height: 20, marginRight: 30}}>
        <Image source={Hamburger} style={{height: '100%', width: '100%'}} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 30, paddingVertical: 20},
  styleContainer: {flex: 1, backgroundColor: Colors.primary},
});
