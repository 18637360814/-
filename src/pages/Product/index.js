import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { List, Divider, Avatar } from 'antd';
const Product = props => {
  useEffect(() => {
    props.dispatch({
      type: 'product/getData',
      payload: {
        swh: false,
      },
    });
  }, []);
  {
    console.log(props, 'props');
  }
  let contentData = props.data ? props.data : '';
  console.log(contentData, 'contentData');
  return (
    <div className={styles.product}>
      <Divider orientation="left">创新产品</Divider>
      <List
        // itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.storagePath} />}
              title={<a href={item.articleContent}>{item.title}</a>}
              description={item.articlePostTime}
            />
          </List.Item>
        )}
      />
      ,
    </div>
  );
};

export default connect(({ product }) => {
  return product;
})(Product);
