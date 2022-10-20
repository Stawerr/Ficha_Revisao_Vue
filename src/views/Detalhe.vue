<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Prática Laboratorial 8"></H1Comp>
        <form @submit.prevent="editar($event)">
            <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
                <div><button class="border border-white bg-info rounded">Editar</button></div>
                <div><button class="border border-white bg-danger rounded" @click="eliminar">Eliminar</button></div>
            </div>
            <div class="border border-white d-flex my-3 p-4">
                <div class="d-flex flex-column align-items-start">
                    <input type="text" class="form-control" placeholder="Descrição da tarefa" ref="descricao" v-model="$route.params.descricao">
                    <div class=" d-flex flex-row mt-4 gap-2">
                        <input class="" type="radio" id="one" name="radio" value="Por concluir" v-model="$route.params.estado" />
                        <input class="" type="radio" id="two" name="radio" value="Concluido" v-model="$route.params.estado" />
                    </div>
                    <p>{{$route.params.data}}</p>
                </div>
            
            </div>
        </form>
    </div>
</template>

<script>
import H1Comp from '../components/widgets/h1Comp.vue';
import { mapState } from 'pinia';
import {todoStore} from '../store/todoStore';
import addTodo from '../models/addTodo';
export default {
    setup(){
        // initialize the store
        const todoStoreT = todoStore()
        return {todoStoreT}
    },
    data() {
        return {
            todo:{}
        };
    },
    methods: {
        editar(){
            this.todo={
                id:this.$route.params.id,
                descricao:this.$route.params.descricao,
                estado:this.$route.params.estado,
                data:this.$route.params.data}
                if(this.todo.descricao==''){
                    alert("O campo descrição não pode ser vazio.");
                }else{
                    this.todoStoreT.update(this.todo)
                    this.$router.push({ name: "Listagem" });
                }
        },
        eliminar() {
            if(this.$route.params.estado=="Por concluir"){
                alert("O Todo não está concluido! Não é possivel apagar.");
            }else{
                this.todoStoreT.delete(this.$route.params.id)
                this.$router.push({ name: "Listagem" });
            }
        }
    },
    components: { H1Comp }
}
</script>

<style scoped>
input[id="one"] {
	accent-color: #DC3545;
}
input[id="two"] {
	accent-color: #0DCAF0;
}
</style>