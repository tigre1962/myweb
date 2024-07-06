<template lang="html">
    <div>
        <header class="header">
            <h1>Bienvenido Tareas</h1>
        </header>
        <main class="main-content">
            <slot>
                <h2>Hola Carajo</h2>
                <h2>Holammmm Carajo</h2>
            </slot>
        </main>
        <footer class="footer">
            <p>Copyright $copy: --- 2024</p>
        </footer>
    </div>
</template>
<script>
import RegistroEmpleado from '../components/RegistroEmpleado.vue';


export default {
    name: 'TareasView',
    comments: {
        RegistroEmpleado
    }
}
</script>
<style lang="scss" scoped>

</style>