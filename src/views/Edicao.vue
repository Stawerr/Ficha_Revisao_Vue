<template>
    <div class="border border-white d-flex flex-column p-5">
        <H1Comp text="Prática Laboratorial 8"></H1Comp>
        <div class="border border-white d-flex flex-column mt-4 p-4">
            <div class="d-flex justify-content-start">
            <input type="text" class="form-control" placeholder="Descrição da tarefa" aria-label="task" aria-describedby="basic-addon1">
            </div>
            <div class=" d-flex flex-row mt-4 gap-2">
                <p>Completa?</p>
                <div class="form-check">
                    <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault">
                </div>
                <div class="form-check">
                    <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckChecked">
                </div>
            </div>
            <div class=" d-flex flex-row justify-content-end gap-2">
                <button class="border border-white bg-danger rounded" @click="cancelar">Cancelar</button>
                <button class="border border-white bg-info rounded">Guardar</button>
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
        cancelar() {
            this.$router.push({ name: "Listagem" });
        }
    },
    components: { H1Comp }
}
</script>

<style scoped>

</style>