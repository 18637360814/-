export default {
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/users/1': { id: 1 },

  'POST /gjy/mock/api/login/create': (req, res) => {
    console.log(req, 'req', res, 'res');
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.username == 'swh' && req.password == '123456') {
      res.send('登录成功');
    } else {
      res.send('登录失败');
    }
  },
};
