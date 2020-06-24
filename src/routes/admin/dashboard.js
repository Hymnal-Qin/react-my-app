import Dashboard from '../../pages/admin/Dashboard';
import params from '../../config/params.json';

export const dashboard = {
	path: '/admin/dashboard',
	component: Dashboard,
	auth: true,
	role: params.user.roles.admin,
};
