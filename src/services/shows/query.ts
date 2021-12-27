import { createEntityQuery } from '@datorama/akita';

import { ShowsState, showsStore } from './store';

export const showsQuery = createEntityQuery<ShowsState>(showsStore);

export const showsStore$ = showsQuery.select((state) => state);
export const shows$ = showsQuery.selectAll();
export const activeShow$ = showsQuery.selectActive();