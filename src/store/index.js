import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Salvar a ciudad gotica", completed: false },
      { id: "2", text: "Arrestar al Jocker", completed: true },
      { id: "3", text: "Visitar el asilo Arkham", completed: true },
      {
        id: "4",
        text: "Ayudar al comisionado gordon con Barbara",
        completed: false,
      },
      { id: "5", text: "Entrenar con alfred", completed: true },
    ],
  },
  getters: {
    allTodos(state){
    return state.todos;
    },
    pendingTodos(state) {
      return state.todos.filter((t) => !t.completed);
    },
    completedTodos(state){
       return state.todos.filter((t) => t.completed);
    },
    getTodosByTab: (_,getters) => (tab) =>{
      switch (tab) {
        case 'allTodos':
          return getters.allTodos
        case 'pendingTodos' :
        return getters.pendingTodos
        case 'completedTodos':
          return getters.completedTodos
       
         
      }
    }
  },
  mutations: {
    toogleTodo(state,id){
      const todoIndex = state.todos.findIndex(t => t.id === id);
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    },
    onCreateTodo(state,todo){

      if(!todo.text) return;
      state.todos = [...state.todos,{...todo}];
    }
  },
  actions: {},
  modules: {},
});
