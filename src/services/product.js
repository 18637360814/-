import request from '@/utils/request';

export async function create(params) {
  try {
    const res = await request.post('/api/product/create', params);
    return res;
  } catch (error) {
    return error;
  }
}
