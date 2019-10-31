import Detail from "../../page/product/Detail";

export default {
	product: {
		path: (slug = ":slug") => `/product/${slug}`,
		component: Detail
	}
};
