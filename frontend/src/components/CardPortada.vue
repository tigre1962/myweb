<template lang="">
    <div class="card-portada">
        <img
            class="card-portada__img" 
            src="../assets/004.png"
        >
        <div class="card-portada__content">
        <img
                class="card-portada__content__img" 
                src="../assets/001.jpg"
        >
        <p class="card-portada__content__name">La gata ladrona</p>
        <div class="card-portada__content__report">
            <div class="card-portada__content__report__items">
                <p class="card-portada__content__report__items__number">20</p>
                <p class="card-portada__content__report__items__text">Articulos</p>
            </div>
            <div class="card-portada__content__report__items">
                <p class="card-portada__content__report__items__number">5</p>
                <p class="card-portada__content__report__items__text">Proyectos</p>
            </div>
            <div class="card-portada__content__report__items">
                <p class="card-portada__content__report__items__number">20</p>
                <p class="card-portada__content__report__items__text">Anos de Experiencia</p>
            </div>
        </div>
        <div class="card-portada__content__ctrls">
            <button class="card-portada__content__ctrls__btn">Conectar</button>
            <button class="card-portada__content__ctrls__btn celeste">Ver mas</button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'CardPortada'
}
</script>
<style lang="scss" scoped>
    .card-portada {
        width: 100%;
        height: 400px;
        position: relative;
        display: flex;
        justify-content: center;
        &__img {
            width: 100%;
            height: 100%;
        }
        &__content {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &__img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            &__name {
                color: black;
                font-weight: bold;
                margin-bottom: 5px;
            }
            &__report {
                border-top: 1px solid black;
                display: flex;
                justify-content: center;
                &__items {
                    width: 100px;
                    color: black;
                    &__number {
                        font-weight: bold;
                    }
                    &__text {
                        font-size: 12px;
                    }
                }
            }
            &__ctrls {
                &__btn {
                    background: green;
                    padding: 5px 2em 5px 2em;
                    margin: 5px;
                    border: none;
                    border-radius: 10px;
                    color: black;
                    &.celeste {
                        background: rgb(78, 142, 153);
                    }
                }
            }
        }
    }
</style>