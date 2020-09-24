import React, { useState } from 'react';
import styles from './index.less';
import { Col, Row, Icon } from 'antd';

const CommenFooter = () => {
  return (
    <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <div className={styles.footer}>
        <div className={styles.name}>
          {/* <img src={require('@/assets/logo2.png')} /> */}
          <div>
            <h2>中国城市燃气协会产品管理工作委员会</h2>
            <p>Product Management Committee of China Gas Association</p>
          </div>
        </div>
        <Row className={styles.details}>
          <Col span={5}>
            <p>主办单位</p>
            <p>中国城市燃气协会</p>
          </Col>
          <Col span={7}>
            <p>运营单位</p>
            <p>新奥阳光易采科技有限公司</p>
          </Col>
          <Col span={7}>
            <p>E-mail</p>
            <p>gaspmc2018@163.com</p>
          </Col>
          <Col span={5}>
            <p>网站业务电话</p>
            <p>010—57302182</p>
          </Col>
          <Col span={5}>
            <p>秘书处联系电话</p>
            <p>17733688117</p>
          </Col>
          <Col span={7}>
            <p>邮编</p>
            <p>065000</p>
          </Col>
          <Col span={8}>
            <p>地址</p>
            <p>河北省廊坊市开发区华祥路106号设备楼</p>
          </Col>
        </Row>
      </div>
      <div className={styles.RecordNo}>
        冀ICP备18011182号-10 京公网安备110102001546号　|　Copyright
        <Icon type="copyright" /> 2019
        版权所有：中国城市燃气协会产品管理工作委员会
      </div>
    </div>
  );
};
export default CommenFooter;
