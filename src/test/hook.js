import React, {memo, useState} from "react";

const Child = memo(({data}) => {
	const [name, setName] = useState(data)
	return (
		<div>
			<div>child</div>
			<div>{name} --- {data}</div>
		</div>
	)
})
