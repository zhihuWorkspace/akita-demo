import { createAxios } from '../../utils/axios';
import { showsStore, ShowsModel } from './store';

class ShowsService {
  async get() {
    const shows = await createAxios().get(`/shows`).then((res) => res.data);
    showsStore.set(shows);
  }

  add(show: ShowsModel, options: { prepend?: boolean }) {
    showsStore.add(show, options);
  }

  update(entityId: number, show: Partial<ShowsModel>) {
    showsStore.update(entityId, show);
  }

  move(from: number, to: number) {
    showsStore.move(from, to);
  }

  setActive(entityId: number) {
    showsStore.setActive(entityId);
  }

  setNextActive() {
    showsStore.setActive({ next: true });
  }
}

export const showsService = new ShowsService();
