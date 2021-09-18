import Home from '../pages/Home';
import User from '../pages/User';

export const BASIC_ROUTER_CONFIG = [
    {
        path: '/',
        exact: true,
        component: Home,
    }, 
    {
        path: '/user',
        exact: true,
        component: User,
    }
]