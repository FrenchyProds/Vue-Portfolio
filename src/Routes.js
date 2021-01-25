import index from './components/index'
import aboutMe from './components/aboutMe'
import projects from './components/projects'
import contact from './components/contact'

export default [
    {
        path: '/',
        name: 'home',
        component: index
    },
    {
        path: '/about-me',
        name: 'aboutMe',
        component: aboutMe
    },
    {
        path: '/projects',
        name: 'projects',
        component: projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    }  
]