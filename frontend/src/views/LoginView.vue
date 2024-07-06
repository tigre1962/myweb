<template lang="html">
  <div>
        <header class="header">
            <h1>Bienvenido a Login</h1>
        </header>
        <main class="main-content">
            <slot>
                <h2>Holammmm LOGIN Carajo</h2>
                <TarjetaEmpleado />
            </slot>
        </main>
        <footer class="footer">
            <p>Copyright $copy: --- 2024</p>
        </footer>
    </div>
</template> 
<script>
import TarjetaEmpleado from '../components/TarjetaEmpleado.vue';

export default {
    name: 'LoginView',
    components: {
        TarjetaEmpleado
    }
}
</script>
<style lang="scss" scoped>
    
</style> 