import { resetStores } from '@datorama/akita';
import { createAxios } from '../../utils/axios';
import { sessionStore } from './store';

class SessionService {
  async signIn(id: string) {
    sessionStore.setLoading(true)
    const authData = await createAxios().get(`/people/${id}`).then((res) => res.data);
    sessionStore.setLoading(false)
    sessionStore.update((auth) => ({
      ...auth,
      ...authData
    }));
  }

  async signOut() {
    resetStores();
  }
}

export const sessionService = new SessionService();
