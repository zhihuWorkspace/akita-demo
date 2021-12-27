import { createStore } from '@datorama/akita';
import { produce } from 'immer';

import { StoreNames } from '../../utils/store-names';

export interface SessionModel {
  id: string
  name: string
  image: {
    medium: string,
    original: string,
  },
  loading?: boolean,
}

const initialState: SessionModel = {
  id: '',
  name: '',
  image: {
    medium: '',
    original: '',
  },
};

export const sessionStore = createStore<SessionModel>(initialState, {
  name: StoreNames.Session,
  producerFn: produce,
  resettable: true,
});
