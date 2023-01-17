import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity style={itemStyles.container}>
      <Image
        style={itemStyles.image}
        source={{uri: item.thumbnails.w160}}
      ></Image>
      <View style={itemStyles.info}>
        <View>
          <Text style={itemStyles.title}>{item.title}</Text>
          <Text style={itemStyles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderRadius: 100,
  },
  info: {
    flexDirection: 'column',
    height: 'auto',
    width: 280,
    padding: 10,
  },
  title: {
    color: '#003D65',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    fontSize: 15,
  },
});

export default ListItem;
