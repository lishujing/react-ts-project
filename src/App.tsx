import React from 'react';
// 直接引入整个 CSS 文件
// import './App.css'; <div className="app"></div>
// 使用 JSS 模块化引入组件，将 CSS 文件转换为对象的方式
import logo from './assets/images/logo.svg'
import styles from './App.module.css' //  <div className={styles.app}></div>
import robots from './mock/robots.json'
import Robot from './components/Robot'
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>
    </div>
  );
}

export default App;
