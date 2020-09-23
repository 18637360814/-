export default {
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/users/1': { id: 1 },

  'POST /gjy/mock/api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([2, 3, 4]);
  },
};
