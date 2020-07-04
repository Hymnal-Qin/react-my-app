// Render element or component by provided condition
export function renderIf(condition, renderFn) {
	return condition ? renderFn() : null;
}

// Check if object is empty
export function isEmpty(obj) {
	//for...in循环对象的所有枚举属性，然后再使用hasOwnProperty()方法来忽略继承属性。
	for (let name in obj) {
		//Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性
		if (obj.hasOwnProperty(name)) {
			return false;
		}
	}
	if (typeof obj !== 'object') {
		return false;
	}
	//if (obj.constructor !== Object) {
	//	return false;
	//}
	return true;
}

// Slug
export function slug(text) {
	return text.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		//.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '')            // Trim - from end of text
}
