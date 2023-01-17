import {StyleSheet, View, Image} from 'react-native';
import {Menu, Settings} from 'react-native-feather';

const Header = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/adopt.jpg')}
        resizeMode="contain"
        borderBottomRightRadius={40}
      ></Image>
      <Menu
        stroke="black"
        fill="#fff"
        width={32}
        height={32}
        style={styles.menu}
      ></Menu>
      <Settings
        stroke="black"
        width={32}
        height={32}
        style={styles.settings}
      ></Settings>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 250,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  settings: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
});

export default Header;
