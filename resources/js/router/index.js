import { createRouter, createWebHistory } from "vue-router";

import PinsIndex from '../components/pins/PinsIndex'
import PinsCreate from '../components/pins/PinsCreate'
import PinsEdit from '../components/pins/PinsEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'pins.index',
        component: PinsIndex
    },
    {
        path: '/pins/create',
        name: 'pins.create',
        component: PinsCreate
    },
    {
        path: '/pins/:id/edit',
        name: 'pins.edit',
        component: PinsEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})