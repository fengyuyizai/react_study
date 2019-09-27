import home from '@/view/home'
import search from '@/view/search'

export default [
    {
        path: '/',
        exact: true,
        component: home
    }, {
        path: '/search',
        exact: true,
        component: search
    }
]