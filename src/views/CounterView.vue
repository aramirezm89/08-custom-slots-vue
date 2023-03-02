<template>
  <h1>Counter view</h1>
  <h2>{{ counter }}</h2>

  <h3>valor al cuadrado: {{ potencia }}  <span>este valor proviene de una propiedad computada</span></h3>
 
 <div>
     <button @click="increment">+</button>
  <button @click="decrement">-</button>
 </div>
</template>

<script>
import useCounter from '@/composables/useCounter'
export default {
    name:'CounterView',
    props:{},


setup(){
  
    const {increment,decrement,counter,potencia} = useCounter();
    return{
        //props
        counter,

        //methods
        increment,
        decrement,
        potencia
    }
}
}
</script>

<style>

</style>