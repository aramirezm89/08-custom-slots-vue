<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ batman }}</h3>
    <button @click="changeIronman">cambiar ironman ref</button>
    <button @click="changeBatman">cambiar batman reactive</button>
  </div>
</template>

<script>
import { ref, reactive} from 'vue'

// @ is an alias to /src

export default {
  name: 'HomeView',
  setup(){
   const ironman =  ref({name:'tony',age:99})
   const batman =  reactive({name:'bruce',age:33})

   return{
    ironman,
    batman,
    changeIronman : () =>{
     
    ironman.value.name = 'hola'
    ironman.value.age = 40
 
    },
    changeBatman : () =>{
      batman.age = 12,
      batman.name = 'Demian'
    }
   }
  }

}
</script>
