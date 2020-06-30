## Hooks
React 16.8新增特性，在不编写class的情况下使用state以及其他的React特性
提倡**函数**组件写法
凡是use开头的React API都是Hooks

### 解决的问题
1. 类组件的不足
 * 状态逻辑难以复用：在组件之间复用状态逻辑很难，可能要用到render props（渲染属性）或者HOC（高阶组件），都会在原先组件外包裹一层父容器（div），导致层级冗余
 * 趋向复杂难以维护：在生命周期函数中混杂不相干的逻辑。类组件中到处都是对状态的访问和处理，导致组件难以拆分
 * this指向问题：父组件给子组件传递函数时，必须绑定this
 
` 
第一种：在构造函数中绑定this，传递给子组件的props值不变，子组件就不会刷新。
第二种：在render函数中绑定this，因为bind函数会返回一个新的函数，所以每一次父组件刷新时，都会生成一个新函数，即使父组件传递给子组件的props值不变，子组件每次都会刷新。
第三种：使用箭头函数，父组件刷新的时候，即使两个箭头函数的函数体是一样的，都会生成一个新的箭头函数，所以子组件每次都会刷新
第四种：使用类的静态属性：原理和第一种方法差不多，比第一种更简洁
`

## Hooks的优势
* 能优化类组件的三大问题
* 能在无需修改组件结构的情况下复用状态逻辑（自定义Hooks）
* 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
* 副作用的关注点分离：副作用指那些没有发生在数据向视图转换过程中的逻辑，如ajax请求、访问原生dom元素、本地持久缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
以往这些副作用都是写在类组件的生命周期函数中。而useEffect在全部渲染完毕后才会执行，useLayoutEffect会在浏览器layout之后，painting之前执行

## 注意事项
* 只能在函数内部的最外层调用Hook，不要在循环、条件判断或者子函数中调用
* 只能在React的函数组件中d调用Hook，不要在其他函数中调用
* 