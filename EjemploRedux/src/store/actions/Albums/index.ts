import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_ALBUMS, ACTUALIZAR_SELECTED_ALBUM, ACTUALIZAR_USERS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
//import IUser from '../../../models/IAlbums';
import IAlbum from '../../../models/IAlbums';
import IAlbums from '../../../models/IAlbums';
import IPhoto from '../../../models/IPhoto';

export const actualizarAlbums = (payload: IAlbum[]) => ({
  type: ACTUALIZAR_ALBUMS,
  payload,
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
  type: ACTUALIZAR_SELECTED_ALBUM,
  payload,
});

export const fetchAlbums =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const albumResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );

      const photoResponse  = await axios.get(  
        'https://jsonplaceholder.typicode.com/photos',
      );  

      const albums = (albumResponse.data as IAlbums[]).map((album) =>({
        ...album,
        thumbnaiUrl: (photoResponse.data as IPhoto[]).find( (photo) => photo.albumId === album.id,)?.thumbnailUrl,
        url: (photoResponse.data as IPhoto[]).find((photo) => photo.albumId === album.id,)?.url,          
      }));

      /*(albumResponse.data as IAlbums[]).map((album) => {
        console.log(album)
      })*/

      console.log('TEST')
      //console.log(albums)
      dispatch(actualizarAlbums(albums));
    } catch (error) {
      console.error(error);
    }
  };

export function prueba() {
  return async function (dispatch: ThunkDispatch<IState, null, IAction>) {
    // Lógica de función
  };
}
