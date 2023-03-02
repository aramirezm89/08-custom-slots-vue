<template>
 
  <!-- <ul>
    <li v-for="user in users" :key="user.id">
      <h2>Hola mundo</h2>
    </li>
  </ul> -->

  <slot  v-for="user in users" :user="user" :key="user.id">

  </slot>
</template>

<script>
export default {
    name:'UserList',
    props:{
        users:Array,
        required:true
    }
};
</script>

<style scoped>
 ul {
    list-style: none;
 }
</style>