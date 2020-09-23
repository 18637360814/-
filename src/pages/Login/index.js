import React, { useState, useEffect, createContext, useContext } from 'react';
import styles from './index.less';
const CreateContext = createContext(); // createContext包裹需要传递的值

const Son = () => {
  let age = useContext(CreateContext); // useContext接受值入参为组件名称
  return <div>{age}</div>;
};

const Login = () => {
  const [age, setAge] = useState(26); // 接受一个初始值
  const [sex, setSex] = useState('男'); // 接受一个初始值
  const [work, setWork] = useState('前端开发'); // 接受一个初始值

  useEffect(() => {});

  return (
    <div>
      <p className={styles.title}> {age} </p>
      <p className={styles.title}> {sex} </p>
      <p className={styles.title}> {work} </p>
      <button onClick={() => setAge(age + 1)}>age+1</button>
      <CreateContext.Provider value={age}>
        <Son />
      </CreateContext.Provider>
    </div>
  );
};
export default Login;
