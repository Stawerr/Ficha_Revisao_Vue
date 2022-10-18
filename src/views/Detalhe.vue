<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Prática Laboratorial 8"></H1Comp>
        <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
            <div><button class="border border-white bg-info rounded">Editar</button></div>
            <div><button class="border border-white bg-danger rounded" @click="eliminar">Eliminar</button></div>
        </div>
        <div class="border border-white d-flex my-3 p-4">
            <div class="d-flex flex-column align-items-start">
                <p>Descrição da tarefa</p>
                <p>Compelta / Por concluir</p>
                <p>Data de criação</p>
            </div>

        </div>
    </div>
</template>

<script>
import H1Comp from '../components/widgets/h1Comp.vue';
export default {
    data() {
        return {};
    },
    methods: {
        eliminar() {
        }
    },
    components: { H1Comp }
}
</script>

<style scoped>

</style>