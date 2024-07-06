<template lang="">
    <div class="card-person">
        <img
            class="card-person__img"
            src="../assets/003.jpg"
        >
        <p class="card-person__name">
                Namy One Piece
        </p>
        <span class="card-person__seudonimo">
                    la gata ladrona
        </span>
        <div class="card-person__ctrls">
            <button class="card-person__ctrls__btn celeste">Invitar</button>
            <button class="card-person__ctrls__btn">Rechazar</button>      
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .card-person {
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

        &__img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        &__name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        &__seudonimo {
            font-size: 13px;
            margin-bottom: 1em;
        }
        &__ctrls {
            //border: 1px solid;
            width: 100%;
            display: flex;
            justify-content: space-around;
            &__btn {
                padding: 5px 30px 5px 30px;
                background: brown;
                border: none;
                color: aliceblue;
            }
            &.celeste {
                background: blue;
            }
        }
    }
</style>