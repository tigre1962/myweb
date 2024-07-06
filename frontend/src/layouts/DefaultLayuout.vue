<template lang="html">
    <div class="dafault-layout">
        <header class="header">
            <h1>Default Layuot</h1>
        </header>
        <main class="main-content">
            <slot>
                
            </slot>
        </main>
        <footer class="footer">
                <p>Copyright $copy: 2024</p>
            </footer>
    </div>
</template>
<script>

export default {
    name: 'DefaultLayout'
}
</script>
<style lang="">
    
</style>