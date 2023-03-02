<template>
  <h2 v-if="isLoading">Cargando...</h2>
  <h1 v-else>Usuarios</h1>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>

  <div v-if="users.length > 0">
   <listUser :users="users" v-slot="{user}">
    <h5>{{ user.first_name }} {{ user.lastName }}</h5>
    <span>{{ user.email }}</span>
  </listUser>

  </div>

  <button @click="previusPage">atras</button>
  <button @click="nextPage">siguiente</button>
  <span>Pagina {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composables/useUsers";
import ListUser from "@/components/ListUser.vue";
export default {
  components:{
   ListUser
  },
  setup() {
    const {
      currentPage,
      errorMessage,
      isLoading,
      nextPage,
      previusPage,
      users,
    } = useUsers();


     
    return {
      currentPage,
      errorMessage,
      isLoading,
      nextPage,
      previusPage,
      users,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}


ul {
  width: 250px;
}
</style>
