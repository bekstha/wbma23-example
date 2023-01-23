import React from 'react';
import {Text} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import PropTypes from 'prop-types';
import {Card, Icon} from '@rneui/themed';

const Single = ({route}) => {
  console.log(route.params);
  const {title, description, filename} = route.params;
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Image
        style={{width: '100%', height: 400}}
        source={{uri: uploadsUrl + filename}}
      />
      <Icon name="rowing"></Icon>
      <Text>{description}</Text>
    </Card>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
