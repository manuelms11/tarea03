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
  const {title, id} = albums[selectedAlbum || 0];

  const onBackPress = () => {
    dispatch(actualizarSelectedAlbum(null));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Container>
      <CustomText>{title}</CustomText>     

      {/* <Image
        style={styles.image}
        source={{uri: 'https://via.placeholder.com/600/92c952'}}
      /> */}

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
    width: 50,
    height: 50,
  },
});

export default AlbumDetails;
