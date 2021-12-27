import { createEntityStore, EntityState, ActiveState } from '@datorama/akita';
import { produce } from 'immer';

import { StoreNames } from '../../utils/store-names';


export interface ShowsModel {
  id: number
  name: string
  image: {
    medium: string,
    original: string,
  },
  summary: string
}

export interface ShowsState extends EntityState<ShowsModel, number>, ActiveState { }


const initialState: ShowsState = {
  active: ''
};

export const showsStore = createEntityStore<ShowsState>(initialState, {
  name: StoreNames.Shows,
  producerFn: produce,
  resettable: true,
});
