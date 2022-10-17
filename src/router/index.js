import { createRouter, createWebHistory } from "vue-router";


const routes=[
    {path:'/',name: 'Listagem', component: ()=>import('../views/Listagem.vue')},
    //{path:'/users',name: 'userList', component: ()=>import('../components/Users.vue')},
    //{path:'/users/:fname/:lname/:age',name: 'oneUser', component: ()=>import('../components/thisUser.vue')},
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router