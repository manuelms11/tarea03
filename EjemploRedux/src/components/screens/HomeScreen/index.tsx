import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';
import UserDetails from '../../molecules/UserDetails';
import UserList from '../../organisms/UserList';

const HomeScreen: React.FC = () => {
  const selectedAlbum = useSelector((state: IState) => state.Albums.selectedAlbum);
  //const selectedUser = useSelector((state: IState) => state.Users.selectedUser);

  
  return <View>{selectedAlbum ? <AlbumDetails /> : <AlbumList />}</View>;
  //return <View><AlbumList /></View>;
  //return <View>{selectedUser ? <UserDetails /> : <UserList />}</View>;

}; 

export default HomeScreen;
