
  import { ref, } from "vue";
  import axios from "axios";
const useUsers = () =>{
      const users = ref([]);
      const isLoading = ref(true);
      const currentPage = ref(1);
      const errorMessage = ref("");

      const getUsers = async (page = 1) => {
        try {
          if (page <= 1) page = 1;
          isLoading.value = true;
          const { data } = await axios.get(
            `https://reqres.in/api/users?page=${page}`
          );

          if (data.data.length > 0) {
            users.value = data.data;
            currentPage.value = page;
            isLoading.value = false;
            errorMessage.value = null;
          } else if (currentPage.value > 0) {
            errorMessage.value = "No hay mas usuarios que mostrar";
            users.value = [];
            isLoading.value = false;
          }
        } catch (error) {
          console.log(error);
        }
      };

      getUsers();
      return {
        isLoading,
        currentPage,
        errorMessage,
        users,

        nextPage: () => getUsers(currentPage.value + 1),
        previusPage: () => getUsers(currentPage.value - 1),
      };

}

export default useUsers;