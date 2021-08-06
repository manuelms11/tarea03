import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import {fetchTodos} from '../../../store/actions/Todos';
import {actualizarSelectedAlbum} from '../../../store/actions/Albums';

const AlbumDetails: React.FC = () => {
  const dispatch = useDispatch();

  const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);
  const albums = useSelector((state: IState) => state.Albums.albums);
  const {title, userId, url, id} = albums[selectedAlbum || 0];

  const onBackPress = () => {
    dispatch(actualizarSelectedAlbum(null));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Container>
      <CustomText>{id}. {title} </CustomText>     
      <Image style={styles.image} source={{ uri: url}}></Image>  
      <Button title="Back" onPress={onBackPress} />
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
  height: 100%;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const TodoList = styled.FlatList`
  padding: 8px;
`;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
  },
});

export default AlbumDetails;
