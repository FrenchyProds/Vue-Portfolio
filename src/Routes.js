import index from './components/Homepage/index'
import aboutMe from './components/About-me/aboutMe'
import projects from './components/projects/projects'
import contact from './components/contact/contact'

export default [
    {
        path: '/',
        name: 'home',
        component: index,
        meta: { transitionName: 'zoom' }
    },
    {
        path: '/about-me',
        name: 'aboutMe',
        component: aboutMe,
        meta: { transitionName: 'zoom' }
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