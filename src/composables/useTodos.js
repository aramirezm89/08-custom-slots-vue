import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
    const store = useStore();
    const openModal = ref(false);
    const currentTab = ref("allTodos");
    const myForm = ref({
      id: new Date().getTime() * 100,
      text:null,
      completed : false
    })
    
  return {
    openModal,
    currentTab,
    myForm,
    allTodos: computed(() => store.getters["allTodos"]),
    pendingTodos: computed(() => store.getters["pendingTodos"]),
    completedTodos: computed(() => store.getters["completedTodos"]),
    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    //methods:
    toogleTodo: (id) => store.commit("toogleTodo", id),
    onSubmitform: () =>{
     store.commit("onCreateTodo",myForm.value)
    },
    handleModal : () =>{
      openModal.value = !openModal.value;
    },
    closeModal:(event) =>{
      openModal.value = event;
    }
  };
};

export default useTodos;
