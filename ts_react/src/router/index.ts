import Home from '@/view/home'
import Search from '@/view/search'

export default [
    {
        path: '/home',
        exact: true,
        component: Home
    }, {
        path: '/search',
        exact: true,
        component: Search
    }
]