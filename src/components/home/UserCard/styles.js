import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

export default styles = StyleSheet.create({
  cardView: {
    borderRadius: 15,
    backgroundColor: Colors.secondary,
    padding: 13,
  },
  imgView: {width: '100%'},
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:7
  },
  titleName: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
    width: '70%',
  },
  age: {fontSize: 14, color: Colors.white, fontWeight: 'bold'},
  interest: {color: Colors.white},
});
