import React from "react";

class Clock extends React.Component {
	//构造函数初始化 构造函数是唯一可以给 this.state 赋值的地方
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	//生命周期方法
	//挂载 组件第一次被渲染到 DOM 中的时候就为其设置一个计时器
	componentDidMount() {
		//设置计时器
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	//卸载 当 DOM 中 Clock 组件被删除的时候应该清除计时器
	componentWillUnmount() {
		//清除计时器
		clearInterval(this.timerID);
	}

	tick() {
		//setState() 更新state中的数据
		this.setState({
			date: new Date()
		});
	}

	render() {
		return <div>It is {this.state.date.toLocaleTimeString()}.</div>;
	}
}

export default Clock;
