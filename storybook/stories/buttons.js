import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import { Button } from '../../src/components/button';
import markdown from './test.md';

storiesOf('Buttons|Simple', module)
	//同一个组件可对应多个story， 装饰器 的作用是把这些 story 包起来，形成一个父级元素，然后可以对这个父级元素做些修饰，比如让所有子元素居中对齐。
	//.addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
	//一个 add 表示添加一个 story
	.add(
		'primary',
		() => (
			<Button type="button" theme="primary" onClick={action('clicked')}>
				Button
			</Button>
		),
		{
			// 将会渲染 markdown 内容
			notes: { markdown },
		},
	);

//嵌套 stories
storiesOf('Buttons|Emoji', module).add('some emoji', () => (
	<Button onClick={action('clicked')}>
		<span role="img" aria-label="so cool">
			{' '}
			😀 😎 👍 💯
		</span>
	</Button>
));
