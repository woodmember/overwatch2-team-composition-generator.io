import { GetterTree, MutationTree } from 'vuex';
import maps from '~/assets/maps';

export const state = () => ({
  map: Object.keys(maps)[Math.floor(Math.random() * Object.keys(maps).length)]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  map: (state) => state.map
};

export const mutations: MutationTree<RootState> = {
  map: (state, value: string) => (state.map = value),
  randomize: (state) => {
    const filtered = Object.keys(maps).filter((element) => element !== state.map);
    state.map = filtered[Math.floor(Math.random() * filtered.length)];
  }
};
