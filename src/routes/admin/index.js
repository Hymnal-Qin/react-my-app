import * as product from './product';
import * as dashboard from './dashboard';

const admin = {
	...dashboard,
	...product,
};
export default admin;
