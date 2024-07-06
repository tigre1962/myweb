<template lang="html">
  <div>
        <header class="header">
            <h1>Bienvenido al Home</h1>
        </header>
        <main class="main-content">
            <slot>
                <h2>Hola Carajo</h2>
                <h2>Holaaa Carajo</h2>
                <h2>Holaaa Carajo</h2>
                <h2>Holaaa Carajo</h2>
                <h2>Holaaaa Carajo</h2>
              <HelloWorld/> 
              <CardPeson/>
            </slot>
        </main>
        <footer class="footer">
                <p>Copyright $copy: --- 2024</p>
            </footer>
    </div>
</template>
<script lang="js">
import HelloWorld from '../components/HelloWorld.vue'
import CardPeson from '../components/CardPerson.vue'
  export default {
    name: 'HomeView',
    components: {
      CardPeson,
      HelloWorld
    }
  }
</script>
<style lang="scss" scoped>
  
</style>