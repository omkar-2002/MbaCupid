import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

export default styles = StyleSheet.create({
  infoView: {
    padding: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    marginVertical: 10,
  },
  title: {color: Colors.white, textAlign: 'center'},
  infoLine: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.inactiveTabBar,
    marginVertical: 10,
  },
  textCenter: {
    color: Colors.white,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  hobbies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hobby: {
    backgroundColor: Colors.hobbies,
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 10,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hobbyTitle: {color: Colors.primary, fontSize: 12},
});
