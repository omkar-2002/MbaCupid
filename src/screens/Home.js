import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import analytics from '@react-native-firebase/analytics';
import Colors from '../constants/Colors';
import UserCard from '../components/home/UserCard';
import UserInfo from '../components/home/UserInfo';
import profile from '../assets/images/profileHeader.png';
import Hamburger from '../assets/images/Hamburger.png';
import Right from '../assets/svgImages/Right.svg';
import Wrong from '../assets/svgImages/Wrong.svg';

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.styleContainer}>
      <UserCard
        onPressPhoto={async () =>
          await analytics().logEvent('on_photo_clicked', {
            userName: 'Manish Mandal',
            interest: ['Product Manager', 'Forbes Advisor'],
            age: 24,
          })
        }
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
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.4}>
          <Wrong />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} activeOpacity={0.4}>
          <Right />
        </TouchableOpacity>
      </View>
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
  actions: {flexDirection: 'row', justifyContent: 'center'},
  actionBtn: {marginLeft: 20},
});
