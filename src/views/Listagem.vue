<template>
    <div class="border border-white d-flex flex-column p-5">
        <h1>Prática Laboratorial 08</h1>
        <div class="d-flex flex-row justify-content-between align-items-center gap-4">
            <div>Tarefas (1/3)</div>
            <div><button class="border border-white bg-info">Por Cocluir</button></div>
            <div><button class="border border-white bg-info">Completas</button></div>
            <div><button class="border border-white bg-info">Criar</button></div>
        </div>
        <div class="border border-white d-flex flex-row justify-content-between align-items-center p-4">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <p>Descrição da tarefa</p>
            <button class="border border-white bg-info">Detalhe</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>