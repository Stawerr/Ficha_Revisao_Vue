<template>
    <div class="border border-white d-flex flex-column p-5">
        <h1Comp text="Prática Laboratorial 8"></h1Comp>
        <div class="d-flex flex-row justify-content-between mt-4 align-items-end gap-4">
            <div>Tarefas (1/3)</div>
            <div><button class="border border-white bg-info rounded">Por Cocluir</button></div>
            <div><button class="border border-white bg-info rounded">Completas</button></div>
            <div><button class="border border-white bg-info rounded" @click="criar">Criar</button></div>
        </div>
        <div class="border border-white d-flex flex-row justify-content-between align-items-center my-3 p-4">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <p>Descrição da tarefa</p>
            <button class="border border-white bg-info rounded" @click="detalhe">Detalhe</button>
        </div>
    </div>
</template>

<script>
import h1Comp from "../components/widgets/h1Comp.vue";
export default {
    data() {
        return {};
    },
    methods: {
        criar() {
            this.$router.push({ name: "Edicao" });
        },
        detalhe() {
            this.$router.push({ name: "Detalhe" });
        }
    },
    components: { h1Comp }
}
</script>

<style scoped>

</style>