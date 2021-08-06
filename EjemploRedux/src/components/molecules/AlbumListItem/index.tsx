import styled from '@emotion/native';
import React, {FC} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import IAlbum from '../../../models/IAlbums';
import {actualizarSelectedAlbum} from '../../../store/actions/Albums';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({album, index}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(actualizarSelectedAlbum(index));
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}. {album.title}
        <Image style={styles.image} source={{ uri: album.url}}></Image>     
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default AlbumListItem;
