import { create } from '@/services/login';

export default {
  namespace: 'login',

  state: {
    data: [],
  },

  effects: {
    *getData({ payload }, { call, put }) {
      const response = yield call(create, payload);
      console.log(response, 'response');
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
