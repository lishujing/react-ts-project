import React from 'react';
// 直接引入整个 CSS 文件
// import './App.css'; <div className="app"></div>
// 使用 JSS 模块化引入组件，将 CSS 文件转换为对象的方式
import logo from './assets/images/logo.svg'
import styles from './App.module.css' //  <div className={styles.app}></div>
// 使用 https://jsonplaceholder.typicode.com 可以通过 json 获取假的 api 进行测试数据。
// 使用 https://jsonplaceholder.typicode.com/users 获取 robots 数据
// import robots from './mock/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart';

interface IProps { }
interface IState {
  robotGallery: any[]
}
class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render(): React.ReactNode {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>
      </div>
    );
  }
}

export default App;
