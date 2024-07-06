<template lang="html">
    <div class="btn-state">
        <button @click="state = !state">{{ labelBtn }}</button>
    </div>
</template>
<script>
export default {
    name: 'BtnState',
    data() {
        return{
            state:true
        }
    },
    computed: {
        labelBtn() {
            return this.state?'Activo': 'Inactivo'
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>