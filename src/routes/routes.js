import showBlogs from '../components/addBLog.vue'
import Header from '../components/Header.vue'
import showBlog from '../components/showBlog.vue'
export default[
    {
        path:'/',component:showBlogs

    },

    {
        path:'/project',
        component:Header
    },
    {
        path:'/showBlog',
        component:showBlog
    }
]