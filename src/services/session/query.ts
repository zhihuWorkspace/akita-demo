import { createQuery } from '@datorama/akita';

import { SessionModel, sessionStore } from './store';

export const sessionQuery = createQuery<SessionModel>(sessionStore);

export const session$ = sessionQuery.select((state) => state);
export const name$ = sessionQuery.select((state) => state.name);
export const avatar$ = sessionQuery.select((state) => state.image.medium);
export const loading$ = sessionQuery.select((state) => state.loading);