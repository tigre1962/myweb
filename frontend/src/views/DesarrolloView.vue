<template lang="html">
    <div>
        <header class="header">
            <h1>Bienvenido a About</h1>
        </header>
        <main class="main-content">
            <slot>
                <h2>Holitas Carajo</h2>
                <CrearWeb nombre="Camilo" tel="555333" correo="camilo@gmail.com"/>
            </slot>
        </main>
        <footer class="footer">
            <p>Copyright &copy: Eldesgraciado 2024</p>
        </footer>
    </div>
</template>
<script >
import CrearWeb from '../components/CrearWeb.vue';

export default {
    name: 'DesarroloView',
    components: {
        CrearWeb
        
    } 
}
</script>
<style lang="">
    
</style>