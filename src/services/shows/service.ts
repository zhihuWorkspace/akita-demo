import { createAxios } from '../../utils/axios';
import { showsStore, ShowsModel } from './store';

class ShowsService {
  async get() {
    const shows = await createAxios().get(`/shows`).then((res) => res.data);
    showsStore.set(shows);
  }

  add(show: ShowsModel) {
    showsStore.add(show);
  }

  update(entityId: string, show: Partial<ShowsModel>) {
    showsStore.update(entityId, show);
  }

  setActive(entityId: string) {
    showsStore.setActive(entityId);
  }
}

export const showsService = new ShowsService();
