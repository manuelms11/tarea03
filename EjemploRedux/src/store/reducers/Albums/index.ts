import {IAction} from '../../../models/IAction';
import IAlbum from '../../../models/IAlbums';
import {ACTUALIZAR_SELECTED_USER, ACTUALIZAR_USERS} from '../../actions';

export interface IAlbumsState {
  albums: IAlbum[];
  selectedAlbum: number | null;
}

const initialState: IAlbumsState = {
  albums: [],
  selectedAlbum: null,
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case ACTUALIZAR_USERS:
      return {...state, albums: payload as IAlbum[]};

    case ACTUALIZAR_SELECTED_USER:
      return {...state, selectedAlbum: payload as number | null};

    default:
      return state;
  }
};
