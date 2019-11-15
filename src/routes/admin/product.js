import params from "../../config/params";
import Product from "../../pages/admin/Product";

// 管理员输入商品
export const productEdit = {
	path: (id = ":id") => (`/admin/product/${id}/edit`),
	component: Product,
	auth: true,
	role: params.user.roles.admin
};
