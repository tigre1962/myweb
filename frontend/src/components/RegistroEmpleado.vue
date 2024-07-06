<template lang="">
    <div class="card">
        <h1>{{nombreFormato}}</h1>
        <hr>
        <p>{{tel}}</p>
        <p>{{correo}}</p>
        <p>Hobbies</p>
        <ul>
            <li v-for="(hobbies, i) in hobbies" :key="i">
                {{ hobbies }}
            </li>
        </ul>
    </div>
</template>
 
<script >
export default { 
    name: 'RegistroEmpleado',
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
            //default: function() {
            //    return ['Nadar', 'Pintar', 'Bailar']
            //}
            default:()=>(['Pintar', 'Correr', 'Bailar'])
        }
    },
    computed: {nombreFormato() {
        return this.nombre[0].toUpperCase() + this.nombre.substr(1).totowerCase()
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