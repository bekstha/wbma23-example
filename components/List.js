import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );
      setMediaArray(media);
    } catch (error) {
      console.error('list, loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  console.log('List, loadName', mediaArray);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
