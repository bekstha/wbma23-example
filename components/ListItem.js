import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {ListItem as RNEListItem} from '@rneui/themed';
import {Avatar, Button} from '@rneui/base';

const ListItem = ({singleMedia, navigation}) => {
  const item = singleMedia;
  return (
    <RNEListItem
      onPress={() => {
        navigation.navigate('Single', item);
      }}
    >
      <Avatar size="large" source={{uri: uploadsUrl + item.thumbnails?.w160}} />
      <RNEListItem.Content>
        <RNEListItem.Title>{item.title}</RNEListItem.Title>
        <RNEListItem.Subtitle numberOfLines={1}>
          {item.description}
        </RNEListItem.Subtitle>
      </RNEListItem.Content>
      <Button
        onPress={() => {
          navigation.navigate('Single', item);
        }}
      >
        View
      </Button>
    </RNEListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
