import React, { useState } from 'react';
import { Link } from 'umi';
import styles from './index.less';

const User = () => {
  return (
    <div className={styles.user}>
      <Link className={styles.login} to="/user/login">
        登录
      </Link>
      <span>丨</span>
      <Link className={styles.login} to="/register">
        注册
      </Link>
    </div>
  );
};

export default User;
