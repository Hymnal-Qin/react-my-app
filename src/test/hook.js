import React, {
	createContext,
	forwardRef,
	memo,
	useCallback,
	useContext,
	useEffect, useImperativeHandle,
	useMemo,
	useReducer, useRef,
	useState
} from "react";

/**
 * useState
 * 1. React假设当你多次调用useState时，你能保证每次渲染时它们的调用顺序是不变的
 * 2. 通过在函数组件里调用它，来给组件添加一些内部state，React会在重复渲染时保留这个state
 * 3. useState唯一的参数就是初始state
 * 4. useState会返回一个数组：一个state，一个更新state的函数
 * 		在初始化渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同
 * 		你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并，而是直接替换
 *
 *
 */

function Child1() {
	let [number, setNumber] = useState(0)

	function alertNumber() {
		setTimeout(() => {
			alert(number)
			//这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
			setNumber(number => number + 1)
		}, 3000)
	}

	return (
		<>
			<p>{number}</p>
			<button onClick={() => setNumber(number + 1)}>+</button>
			<button onClick={alertNumber}>alertNumber</button>
		</>
	)

}

function Child2(props) {
	function getInitState() {
		return {number: props.number}
	}

	let [counter, setCounter] = useState(getInitState)
	return (
		<>
			<p>{counter.number}</p>
			<button onClick={() => setCounter({number: counter.number + 1})}>+</button>
			<button onClick={() => setCounter(counter)}>setCounter</button>
		</>
	)
}

/**
 * Hook 内部使用 Object.is（浅比较） 来比较新/旧 state 是否相等
 * 与 class 组件中的 setState 方法不同，如果你修改状态的时候，传的状态值没有变化，则不重新渲染
 * 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。
 * 你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果
 */
function Child3() {
	const [counter, setCounter] = useState({name: '计数器', number: 0})
	return (
		<>
			<p>{counter.name}: {counter.number}</p>
			{/* 运算符来达到合并更新对象的效果 */}
			<button onClick={() => setCounter({...counter, number: counter.number + 1})}>+</button>
			{/*如果你修改状态的时候，传的状态值没有变化，则不重新渲染*/}
			<button onClick={() => setCounter(counter)}>++</button>
		</>
	)
}

const Child = memo(({data}) => {
	//可以任意命名，返回的时数组，数组解构
	const [name, setName] = useState(data)
	return (
		<div>
			<div>child</div>
			<div>{name} --- {data}</div>
		</div>
	)
})

const Child4 = memo(({onClick, data}) => {
	return (
		<button onClick={onClick}>{data.number}</button>
	)
})

function Counter() {
	const [name, setName] = useState('计数器')
	const [number, setNumber] = useState(0)
	// 父组件更新时，这里的变量和函数每次都会重新创建，那么子组件接受到的属性每次都会认为是新的
	// 所以子组件也会随之更新，这时候可以用到 useMemo
	// 有没有后面的依赖项数组很重要，否则还是会重新渲染
	// 如果后面的依赖项数组没有值的话，即使父组件的 number 值改变了，子组件也不会去更新
	const data = useMemo(() => ({number}), [number])
	// 有没有后面的依赖项数组很重要，否则还是会重新渲染
	const addClick = useCallback(() => {
		setNumber(number + 1)
	}, [number])

	return (
		<>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
			<Child4 data={data} onClick={addClick}/>
		</>
	)
}

/**
 * useReducer
 *
 * useReducer 和 redux 中 reducer 很像
 * useState 内部就是靠 useReducer 来实现的
 * useState 的替代方案，它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
 * 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等
 */
const initialState = 0

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {number: state.number + 1}
		case 'decrement':
			return {number: state.number - 1}
		default:
			throw new Error()
	}
}

function init(initialState) {
	return {number: initialState}
}

function Counter1() {
	const [state, dispatch] = useReducer(reducer, initialState, init)
	return (
		<>
			Count: {state.number}
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
			<button onClick={() => dispatch({type: 'decrement'})}>-</button>
		</>
	)
}

/**
 * useContext
 * 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
 * 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定
 * 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值
 * useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>
 * useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context
 */
const CounterContext = createContext();

function SubCounter() {
	const {state, dispatch} = useContext(CounterContext)

}

function Counter3() {
	const [state, dispatch] = useReducer(reducer, initialState, () => ({number: initialState}))
	return (
		<CounterContext.Provider value={{state, dispatch}}>
			<SubCounter/>
		</CounterContext.Provider>
	)
}

/**
 * useEffect
 * effect 副作用 指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
 * 副作用操作可以分两类：需要清除的和不需要清除的。
 *
 * useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
 *
 * useEffect 接收一个函数，该函数会在组件渲染到屏幕之后才执行，该函数有要求：要么返回一个能清除副作用的函数，要么就不返回任何内容
 *
 * 与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。
 * 大多数情况下，effect 不需要同步地执行。
 * 在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。
 */

//每次我们重新渲染，都会生成新的 effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect 属于一次特定的渲染。
function Counter5() {
	const [number, setNumber] = useState(0)
	useEffect(() => {
		document.title = `你点击了${number}次`
	})
	return (
		<>
			<p>{number}</p>
			<button onClick={() => setNumber(number + 1)}>+</button>
		</>
	)
}

//清除副作用
// 副作用函数还可以通过返回一个函数来指定如何清除副作用，为防止内存泄漏，清除函数会在组件卸载前执行。如果组件多次渲染，则在执行下一个 effect 之前，上一个 effect 就已被清除。

function Counter6() {
	let [number, setNumber] = useState(0)
	let [text, setText] = useState('')
	// 相当于componentDidMount 和 componentDidUpdate
	useEffect(() => {
		let $timer = setInterval(() => {
			setNumber(number => number + 1)
		}, 1000)
		// useEffect 如果返回一个函数的话，该函数会在组件卸载和更新时调用
		// useEffect 在执行副作用函数前，会先调用上一次返回的函数
		// 如果要清除副作用，就要返回一个清除副作用的函数
		// return () => {
		// 	clearInterval($timer)
		// }
	}, [])//要么在这里传入一个空的依赖数组，就不会去重复执行
	// return ...
}

//依赖项数组控制着 useEffect 的执行
// 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可
// 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行


//useEffect 在全部渲染完毕后才会执行
// useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行
// 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
// 可以使用它来读取 DOM 布局并同步触发重渲染
// 在浏览器执行绘制之前 useLayoutEffect 内部的更新计划将被同步刷新
// 尽可能使用标准的 useEffect 以避免阻塞视图更新

/**
 * useRef
 * 类组件、React 元素用 React.createRef，函数组件使用 useRef
 * useRef 返回一个可变的 ref 对象，其 current 属性被初始化为传入的参数（initialValue)
 * useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）
 */

function Child6(props, parentRef) {
	let focusRef = useRef()
	let inputRef = useRef()
	useImperativeHandle(parentRef, () => {
		return {
			focusRef,
			inputRef,
			name: '计数器',
			focus() {
				focusRef.current.focus()
			},
			changeText(text) {
				inputRef.current.value = text
			}
		}
	})

	return forwardRef(
		<>
			<input type='text' ref={focusRef}/>
			<input ref={inputRef}/>
		</>
	)
}

function Parent() {
	let [number, setNumber] = useState(0)
	const inputRef = useRef()

	function getFocus() {
		inputRef.current.value = 'focus'
		inputRef.current.changeText('')
	}

//TODO
	return (
		<>
			<Child6 ref={inputRef}/>
			<button onClick={() => setNumber({number: number + 1})}>+</button>
			<button onClick={getFocus}>获得焦点</button>
		</>
	)
}

//useImperativeHandle可以让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛
// 在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用
// 父组件可以使用操作子组件中的多个 ref


/**
 * 自定义hooks
 * 自定义 Hook 更像是一种约定，而不是一种功能。如果函数的名字以 use 开头，并且调用了其他的 Hook，则就称其为一个自定义 Hook
 * 有时候我们会想要在组件之间重用一些状态逻辑，之前要么用 render props ，要么用高阶组件，要么使用 redux
 * 自定义 Hook 可以让你在不增加组件的情况下达到同样的目的
 * Hook 是一种复用状态逻辑的方式，它不复用 state 本身
 * 事实上 Hook 的每次调用都有一个完全独立的 state
 */

function useNumber() {
	let [number, setNumber] = useState(0)
	useEffect(() => {
		setInterval(() => {
			setNumber(number => number + 1)
		}, 1000)
	}, [])
	return [number, setNumber]
}
// // 每个组件调用同一个 hook，只是复用 hook 的状态逻辑，并不会共用一个状态
function Counter7() {
	let [number, setNumber] = useNumber()
	return (
		<button onClick={() => setNumber(number + 1)}>{number}</button>
	)

}

//在使用 useMemo 前，应该先思考三个问题：
//
// 传递给 useMemo 的函数开销大不大？ 有些计算开销很大，我们就需要「记住」它的返回值，避免每次 render 都去重新计算。如果你执行的操作开销不大，那么就不需要记住返回值。否则，使用 useMemo 本身的开销就可能超过重新计算这个值的开销。因此，对于一些简单的 JS 运算来说，我们不需要使用 useMemo 来「记住」它的返回值。
// 返回的值是原始值吗？ 如果计算出来的是基本类型的值（string、 boolean 、null、undefined 、number、symbol），那么每次比较都是相等的，下游组件就不会重新渲染；如果计算出来的是复杂类型的值（object、array），哪怕值不变，但是地址会发生变化，导致下游组件重新渲染。所以我们也需要「记住」这个值。
// 在编写自定义 Hook 时，返回值一定要保持引用的一致性。 因为你无法确定外部要如何使用它的返回值。如果返回值被用做其他 Hook 的依赖，并且每次 re-render 时引用不一致（当值相等的情况），就可能会产生 bug。所以如果自定义 Hook 中暴露出来的值是 object、array、函数等，都应该使用 useMemo 。以确保当值相同时，引用不发生变化。
//


