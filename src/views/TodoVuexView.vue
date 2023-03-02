<template>
  <h1>Listado de tareas de Batman</h1>

  <h4>Tareas pendientes : {{ pendingTodos.length }}</h4>
  <hr />
  <button
    @click="currentTab = 'allTodos'"
    :class="{ active: currentTab === 'allTodos' }"
  >
    Todos
  </button>
  <button
    @click="currentTab = 'pendingTodos'"
    :class="{ active: currentTab === 'pendingTodos' }"
  >
    Pendientes
  </button>
  <button
    @click="currentTab = 'completedTodos'"
    :class="{ active: currentTab === 'completedTodos' }"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        :class="{ completed: todo.completed }"
        v-for="todo in getTodosByTab"
        :key="todo.id"
        @dblclick="toogleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="handleModal">Crear Todo</button>

  <modal v-if="openModal" @on:close="(event) =>closeModal(event)">

    <template v-slot:header>
     <h3> Crear nuevo Todo</h3>
    </template>


    <template v-slot:body>
        <form @submit.prevent="onSubmitform">
          
            <input type="text" v-model="myForm.text"   />
           <div>
             <button type="submit">Guardar</button>
           </div>
        </form>
    </template>

    <template v-slot:footer>
        <button @click="handleModal">cerrar</button>
       
    </template>
  </modal>
</template>

<script>
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal.vue";
export default {
   components: {
    Modal,
  },
  setup() {
    const {
      myForm,
      allTodos,
      completedTodos,
      currentTab,
      getTodosByTab,
      pendingTodos,
      toogleTodo,
      openModal,
      closeModal,
      handleModal,
      onSubmitform
    } = useTodos();
    return {
      allTodos,
      completedTodos,
      currentTab,
      getTodosByTab,
      pendingTodos,
      toogleTodo,
      closeModal,
      myForm,
      openModal,
      handleModal,
      onSubmitform

    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 400px;
  text-align: center;
}
li {
  list-style: none;
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
