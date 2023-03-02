<template>
  <h2 v-if="isLoading">Cargando...</h2>
  <h1 v-else>Usuarios</h1>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.first_name + " " + user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="previusPage">atras</button>
  <button @click="nextPage">siguiente</button>
  <span>Pagina {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composables/useUsers";
export default {
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

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>
