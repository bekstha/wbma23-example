import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useEffect, useState} from 'react';

const List = () => {
  const url =
    'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setMediaArray(json);
  };

  useEffect(() => {
    loadMedia();
  }, []);

  console.log('List, loadName', mediaArray);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
