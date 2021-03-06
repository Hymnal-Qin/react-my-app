import './style.scss';
import * as classnames from 'classnames';
import React from 'react';

const defaultProps = {
	type: '',
	/**
	 * 是否旋转
	 */
	spin: false,
};

const IconFonts = (props = defaultProps) => {
	// 依次从props中取出可能会出现的值，此处的other表示其余所有剩余的属性，这是ES6的语法
	const { type, className, spin, color, style, ...other } = props;
	// 利用classnames方法计算出最终的classname字符串。
	const cls = classnames(
		{
			icon: true,
			'icon-spin': !!spin || type === 'loading',
			[`icon-${type}`]: true,
		},
		className,
	);

	const _style = { ...style, color };

	return <i className={cls} {...other} style={_style} />;
};

export default IconFonts;
