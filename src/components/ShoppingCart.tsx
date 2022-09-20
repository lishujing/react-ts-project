import React from 'react'
import styles from './ShoppingCart.module.css'

interface IProps {

}

interface IState {
    isOpen: boolean
}

/**
 * props：是组件对外的接口，且用于组件间数据传递
 * state：是组件对内的接口，且用于组件内部的数据传递
 * 
 * state 是私有的，可以认为 state 是组件的“私有属性”，用 setState() 修改 State。
 * 如果直接修改 state ，组件不会触发 render 函数，页面不会渲染 
 * 错误写法：this.state.isOpen = true
 * 正确写法：使用 setState() 方法，以对象赋值的形式
 * 
 * 构建函数 constructor 是唯一可以初始化 state 的地方
 * 
 * 调用 setState 后，state 不会立刻改变，是异步操作
 * 不要依赖当前的 State，计算下一个 State 。因为 this.state 不一定是最新的 state
 * 
 * props 本质上，props 就是传入函数的参数，是从外部传入组件内部的数据。更准确地说，是从父组件传递向子组件的数据。
 * 
 * props 是 Immutable 特性的。
 * 【immutable：不变的。对象一旦创建就不可改变，只能通过销毁、重建来改变数据。通过判断内存地址的是否一致，来确认对象是否有经过修改】
 * 
 * props 是只读属性的
 *  
 * 函数式编程
 */
class ShoppingCart extends React.Component<IProps, IState> {
    // * 生命周期第一阶段： 初始化
    // 初始化组件 state
    constructor(props: IProps) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.button}
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen })
                    }}
                >
                    购物车 2 （件）
                </button>
                <div
                    className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart