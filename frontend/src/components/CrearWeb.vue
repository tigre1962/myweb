<template lang="html">
    <div class="card">
        <h1>{{ nombre }}</h1>
        <hr>
        <p>{{ tel }}</p>
        <p>{{ correo }}</p>
        <BtnState />
    </div>
    <br>
    <div class="registro">
        <h2>Formmulario de Registro</h2>
        <input type="text" placeholder="nombre">
        <input type="email" placeholder="imail">
        <button type="submit">Registrar</button>
    </div>
</template>
<script>
import BtnState from './BtnState.vue';

export default {
    name: 'CrearWeb',
    components: {
        BtnState
    },
    props: ['nombre', 'tel', 'correo']
}
</script>
<style lang="scss" scoped>
    .card {
        width: 300px;
        min-height: 150px;
        padding: 35px;
        margin: 10px;
        border: solid 3px chartreuse;
        box-shadow: chocolate 5px 5px 3px;
    }
</style>