import { create } from '@/services/homepage';

export default {
  namespace: 'homepage',

  state: {
    data: [1, 2, 3],
  },

  effects: {
    *getData({ payload }, { call, put }) {
      const response = yield call(create, payload);
      yield put({
        type: 'saveData',
        payload: response,
      });
    },
  },

  reducers: {
    saveData(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
