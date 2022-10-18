<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Prática Laboratorial 8"></H1Comp>
        <div class="border border-white d-flex flex-column mt-4 p-4">
            <form @submit.prevent="onSubmitHandler($event)">
                <div class="d-flex justify-content-start">
                <input type="text" class="form-control" placeholder="Descrição da tarefa" ref="descricao" v-model="addTodo.descricao">
                </div>
                <div class=" d-flex flex-row mt-4 gap-2">
                    <p>Completa?</p>
                    <div class="">
                        <input class="" type="radio" id="one" name="radioFalse" value="Por concluir" v-model="addTodo.estado" />
                        <input class="" type="radio" id="two" name="radioTrue" value="Concluido" v-model="addTodo.estado" />
                    </div>
                </div>
                <div class=" d-flex flex-row justify-content-end gap-2">
                    <button type="reset" class="border border-white bg-danger rounded" @click="cancelar">Cancelar</button>
                    <button type="submit" class="border border-white bg-info rounded">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import addTodo from '../models/addTodo';
import H1Comp from '../components/widgets/h1Comp.vue';
import { mapState } from 'pinia'
import {todoStore} from '../store/todoStore';
export default {
    setup(){
        // initialize the store
        const todoStoreT = todoStore()
        return {todoStoreT}
    },
    data() {
        return {
            addTodo: new addTodo(),
        };
    },
    computed:{
        getTodos(){
            return this.todoStoreT.getTodos;
        }
    },
    methods: {
        onSubmitHandler(e){
            // Object.entries(this.addTodo).forEach(todo => {
            //     const [key, value] = todo
            //     if (isEmptyValue.exec(value) && key != 'id')
            //         this.form[`${key}Error`] = true
            // });
            // if (Object.values(this.form).some(value => value == true))
            //     return
                if(this.addTodo.id){
                    this.todoStoreT.update(this.addTodo)
                    //this.resetForm()
                }
                else{
                    this.todoStoreT.add(this.addTodo)
                    this.$router.push({ name: "Listagem" });
                    //this.resetForm()
                }
        },
        cancelar() {
            this.$router.push({ name: "Listagem" });
        }
    },
    components: { H1Comp }
}
</script>

<style scoped>
input[name="radioFalse"] {
	accent-color: #DC3545;
}
input[name="radioTrue"] {
	accent-color: #0DCAF0;
}
</style>