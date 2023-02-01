import React from 'react';
import {Text} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import PropTypes from 'prop-types';
import {Card, ListItem} from '@rneui/themed';

const Single = ({route}) => {
  console.log(route.params);
  const {
    title,
    description,
    filename,
    time_added: timeAdded,
    user_id: userId,
  } = route.params;
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{width: '100%', height: 400}}
        source={{uri: uploadsUrl + filename}}
      />
      <ListItem>
        <Text>{description}</Text>
      </ListItem>
      <ListItem>
        <Text>uploaded at: {new Date(timeAdded).toLocaleString('fi-FI')}</Text>
      </ListItem>
      <ListItem>
        <Text>by user: {userId}</Text>
      </ListItem>
    </Card>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
