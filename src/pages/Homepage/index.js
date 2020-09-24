import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { history } from 'umi';
import { connect } from 'dva';
import { Carousel } from 'antd';

const HomePage = props => {
  // useEffect(() => {
  //   props.dispatch({
  //     type: 'homepage/getData',
  //     payload: {
  //       swh: false,
  //     },
  //   });
  // }, []);

  return (
    <div className={styles.homepage}>
      <Carousel>
        <div className={styles.bannerWarper}>
          <img src={require('@/assets/banner1.png')} />
        </div>
        <div className={styles.bannerWarper}>
          <img src={require('@/assets/banner2.png')} />
        </div>
        <div className={styles.bannerWarper}>
          <img src={require('@/assets/banner3.png')} />
        </div>
        <div className={styles.bannerWarper}>
          <img src={require('@/assets/banner4.png')} />
        </div>
      </Carousel>
      <div className={styles.content}>
        <h2>创新产品</h2>
      </div>
    </div>
  );
};

export default connect(({ homepage }) => {
  return homepage;
})(HomePage);
