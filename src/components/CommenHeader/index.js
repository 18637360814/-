import React, { useState } from 'react';
import { history } from 'umi';
import { Menu } from 'antd';
import User from '@/components/User';

const { SubMenu } = Menu;
import { AppstoreOutlined } from '@ant-design/icons';

const CommenHeader = () => {
  const [current, setcurrent] = useState('index');

  const menuClick = e => {
    setcurrent(e.key);
    if (e.key === 'user') {
      return;
    }
    e.key !== 'index' ? history.push(`/${e.key}`) : history.push(`/`);
  };

  return (
    <>
      <Menu
        onClick={e => {
          menuClick(e);
        }}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="index">首页</Menu.Item>
        <SubMenu key="SubMenu" icon={<AppstoreOutlined />} title="关于产品委">
          <Menu.Item key="introduction">产品委简介</Menu.Item>
          <Menu.Item key="mechanism">组织机构</Menu.Item>
          <Menu.Item key="rules">工作规则</Menu.Item>
        </SubMenu>
        <Menu.Item key="news">行业资讯</Menu.Item>
        <Menu.Item key="product">创新产品</Menu.Item>
        <Menu.Item key="data">物料数据</Menu.Item>
        <Menu.Item key="quality">质量追溯</Menu.Item>
        <Menu.Item key="standard">标准发布</Menu.Item>
        <Menu.Item key="app">技术应用</Menu.Item>
        <Menu.Item key="expert">行业专家</Menu.Item>
        <Menu.Item key="contact">联系我们</Menu.Item>
        <Menu.Item key="user" style={{ float: 'right' }}>
          <User />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default CommenHeader;
