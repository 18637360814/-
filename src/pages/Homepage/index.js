import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { history } from 'umi';
import { connect } from 'dva';

const HomePage = props => {
  useEffect(() => {
    props.dispatch({
      type: 'homepage/getData',
      payload: {
        swh: false,
      },
    });
  }, []);

  return <div>Homepages111</div>;
};

export default connect(({ homepage }) => {
  return homepage;
})(HomePage);
