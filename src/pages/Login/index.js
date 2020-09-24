import React, { useState, useEffect, createContext, useContext } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const Login = props => {
  useEffect(() => {
    // props.dispatch({
    //   type: 'login/getData',
    //   payload: {
    //     swh: false,
    //   },
    // });
  }, []);
  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.dispatch({
      type: 'login/getData',
      payload: {
        username: values.username,
        password: values.password,
      },
    });
  };
  return (
    <div className={styles.login}>
      <Row>
        <Col span={14}>
          <h3>HELLO,WELCOME</h3>
        </Col>
        <Col span={8} className={styles.form_bg}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item>会员登录</Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名/手机号' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名/手机号"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入6～32位密码' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入6～32位密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <a
                style={{ float: 'right' }}
                className="login-form-register"
                href=""
              >
                免费注册
              </a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default connect(({ login }) => {
  return login;
})(Login);
