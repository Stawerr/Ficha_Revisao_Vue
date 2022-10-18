import { createRouter, createWebHistory } from "vue-router";


const routes=[
    {path:'/',name: 'Listagem', component: ()=>import('../views/Listagem.vue')},
    {path:'/edicao',name: 'Edicao', component: ()=>import('../views/Edicao.vue')},
    {path:'/detalhe',name: 'Detalhe', component: ()=>import('../views/Detalhe.vue')},
    //{path:'/users/:fname/:lname/:age',name: 'oneUser', component: ()=>import('../components/thisUser.vue')},
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router