import Detail from '../pages/product/Detail';

export default {
    product: {
        path: (slug = ':slug') => `/product/${slug}`,
        component: Detail,
    },
};
