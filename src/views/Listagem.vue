<template>
    <div class="border border-white d-flex flex-column p-5">
        <h1Comp text="Prática Laboratorial 8"></h1Comp>
        <div class="d-flex flex-row justify-content-between mt-4 align-items-end gap-4">
            <div>Tarefas ({{this.selected}}/{{getCount}})</div>
            <div><button class="border border-white bg-info rounded" @click="changeIncompleted">Por Concluir</button></div>
            <div><button class="border border-white bg-info rounded" @click="changeCompleted">Completas</button></div>
            <div><button class="border border-white bg-info rounded" @click="criar">Criar</button></div>
        </div>
        <div class="border border-white d-flex flex-row justify-content-between align-items-center my-3 p-4">
            <table class="table align-middle table-dark">
                <tr v-if="condition=='all'" v-for="(item,i) in getTodos">
                    <td><input class="form-check-input" type="radio" @click="selectTodo(i)" name="flexRadioDefault" id="flexRadioDefault1"></td>
                    <td><p>{{item.descricao}}</p></td>
                    <td class="text-end"><button class="border border-white bg-info rounded" @click="detalhe(item)">Detalhe</button></td>
                </tr>
                <tr v-else-if="condition=='completed'" v-for="(item,i) in getCompletedTodo">
                    <td><input class="form-check-input" type="radio" @click="selectTodo(i)" name="flexRadioDefault" id="flexRadioDefault1"></td>
                    <td><p>{{item.descricao}}</p></td>
                    <td class="text-end"><button class="border border-white bg-info rounded" @click="detalhe(item)">Detalhe</button></td>
                </tr>
                <tr v-else v-for="(item,i) in getIncTodo">
                    <td><input class="form-check-input" type="radio" @click="selectTodo(i)" name="flexRadioDefault" id="flexRadioDefault1"></td>
                    <td><p>{{item.descricao}}</p></td>
                    <td class="text-end"><button class="border border-white bg-info rounded" @click="detalhe(item)">Detalhe</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import h1Comp from "../components/widgets/h1Comp.vue";
import { mapState } from 'pinia';
import {todoStore} from '../store/todoStore';
export default {
    setup(){
        // initialize the store
        const todoStoreT = todoStore();
        return {todoStoreT}
    },
    data() {
        return {
            selected:0,
            condition: 'all'
        };
    },
    computed:{
        ...mapState(todoStore,['getTodos','getCount','getCompletedTodo','getIncTodo'])
    },
    methods: {
        changeCompleted(){
            this.condition='completed'
        },
        changeIncompleted(){
            this.condition='incompleted'
        },
        criar() {
            this.$router.push({ name: "Edicao" });
        },
        selectTodo(id){
            this.selected=id+1
        },
        detalhe(item) {
            this.$router.push({ name: "Detalhe",params:{id:item.id,descricao:item.descricao,estado:item.estado,data:item.data} });
        }
    },
    components: { h1Comp }
}
</script>

<style scoped>

</style>