import params from '../../config/params';
import Product from '../../pages/admin/Product';
import ProductList from '@pages/admin/product/List';
import ProductCreateOrEdit from '@pages/admin/product/CreateOrEdit';



export const productList = {
	path: '/admin/products',
	component: ProductList,
	auth: true,
	role: params.user.roles.admin
}

export const productCreate = {
	path: '/admin/product/create',
	component: ProductCreateOrEdit,
	auth: true,
	role: params.user.roles.admin
};
// 管理员输入商品
export const productEdit = {
	path: (id = ':id') => `/admin/product/${id}/edit`,
	component: ProductCreateOrEdit,
	auth: true,
	role: params.user.roles.admin
};
