export default {
  'POST /gjy/mock/api/productList': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([
      {
        title:
          '包覆管在上海张江高新技术科技园燃气排管 工程中首次应用的情况报告',
        time: '2019-08-07 15:32:23',
        path:
          'http://res.qingtian.ygyg.cn/userbusipub/M00/06/1A/CvAAEV37J4SAJmLAAAKJoe0QplQ594.png',
      },
    ]);
  },
};
