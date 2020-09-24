export default {
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/users/1': { id: 1 },

  'POST /gjy/mock/api/product/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([
      {
        articleContent:
          '亚大集团 2017 年 12 月成功开发了包覆管道，为此上海亚大进行了大力推广。经过仅半年时间与上海燃气集团及下属多个单位沟通交流，最终在 2018 年 11 月28 日-29 日成功在张江高新技术科技园燃气排管工程中成功得到应用。这是亚大集团首个包覆管道应用案例，也是国内包覆管道产品首次应用工程，希望这个工程为大家今后的市场推广提供经验和帮助。',
        articlePostTime: '2019-08-07 15:32:23',
        storagePath:
          'http://res.qingtian.ygyg.cn/userbusipub/M00/06/1A/CvAAEV37J4SAJmLAAAKJoe0QplQ594.png',
        author: '',
        title:
          '包覆管在上海张江高新技术科技园燃气排管 工程中首次应用的情况报告',
      },
      {
        articleContent:
          '亚大集团 2017 年 12 月成功开发了包覆管道，为此上海亚大进行了大力推广。经过仅半年时间与上海燃气集团及下属多个单位沟通交流，最终在 2018 年 11 月28 日-29 日成功在张江高新技术科技园燃气排管工程中成功得到应用。这是亚大集团首个包覆管道应用案例，也是国内包覆管道产品首次应用工程，希望这个工程为大家今后的市场推广提供经验和帮助。',
        articlePostTime: '2019-08-06 15:32:00',
        storagePath:
          'http://res.qingtian.ygyg.cn/userbusipub/M00/06/1A/CvAAEV37J2eAF4q_AAJztSNvdXs603.png',
        author: '张煊',
        title: '西部管道4项创新成果护航管道安全',
      },
    ]);
  },
};
