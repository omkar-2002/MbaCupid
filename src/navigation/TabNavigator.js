import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home, {HomeOptions} from '../screens/Home';
import Chat from '../screens/Chat';
import Liked from '../screens/Liked';
import Colors from '../constants/Colors';
import ActiveSubtract from '../assets/svgImages/ActiveSubtract.svg';
import InactiveSubtract from '../assets/svgImages/InactiveSubtract.svg';
import ActiveStar from '../assets/svgImages/ActiveStar.svg';
import InactiveStar from '../assets/svgImages/InactiveStar.svg';
import InactiveChat from '../assets/svgImages/InactiveChat.svg';
import ActiveChat from '../assets/svgImages/ActiveSubtract.svg';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.inactiveTabBar,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          paddingBottom: 16,
          height: 62,
        },
      }}>
      <Tab.Screen
        component={Home}
        options={props => ({
          ...HomeOptions(props),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <ActiveSubtract />;
            } else {
              return <InactiveSubtract />;
            }
          },
        })}
        name="Home"
      />
      <Tab.Screen
        options={props => ({
          ...HomeOptions(props),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <ActiveStar />;
            } else {
              return <InactiveStar />;
            }
          },
        })}
        component={Liked}
        name="Liked"
      />
      <Tab.Screen
        options={props => ({
          ...HomeOptions(props),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <ActiveChat />;
            } else {
              return <InactiveChat />;
            }
          },
        })}
        component={Chat}
        name="Chat"
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
