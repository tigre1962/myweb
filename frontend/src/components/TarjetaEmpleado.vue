<template lang="">
    <div class="card">
        <h1>{{nombre}}</h1>
        <hr>
        <p>{{tel}}</p>
        <p>juanito@test.com</p>
        <p>Hobbies</p>
        <ul>
            <li v-for="(hobbies, i) in hobbies" :key="i">
                {{ hobbies }}
            </li>
        </ul>
    </div> 
</template>

<script>


export default { 
    name: 'TarjetaEmpleado',
    data () {
    return {
      mensaje: 'Tarjeta Empleado'
    }
  },
  props: {
    nombre: {
        type:String, default:"nombre usuario"
    },
    tel: {
        type:Number, default:987654
    },
    correo: {
        type:String, required:true
    },
    hobbies: {
            type:Array, 
            default: function() {
                return ['Nadar', 'Pintar', 'Bailar']
            }
        }
    }
}
</script>

<style lang="scss" scoped> 
    .card {
        border: 3px solid;
        margin: 2em;
        width: 300px;
        padding: 2em;
        border-radius: 10px;
        border-color: aqua;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        text-align: center;
        color: rgb(224, 97, 186);
    }
</style>