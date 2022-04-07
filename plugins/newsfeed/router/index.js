import home from '../views/home';
import test from '../views/test';

export default [
    {
        path: '/newsfeed',
        name: 'newsfeedHome',
        component: home,
    },
    {
        path: '/newsfeed/test',
        name: 'newsfeedHomeTest',
        component: test,
    },
];