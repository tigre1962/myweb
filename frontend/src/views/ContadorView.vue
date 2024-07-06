<template >
    <h1>Hola Ramon</h1>
      <div> {{ count }} </div>
        <button @click="increment"> increment </button>
        <button @click="decrement"> decrement </button>
  </template>
  <script setup>
  import {ref} from 'vue'
      const count = ref(0)
      const increment = () => {
        count.value++
      }
      const decrement = () => {
        count.value--
      }
  </script>
  <style lang="scss" scoped>
  button {
    text-align: center;
    color: beige;
    background-color: brown;
    border: 2px solid red;
    border-radius: 15px;
  }
    h1 {
      color: rgb(99, 221, 42);
    }
  </style>
  