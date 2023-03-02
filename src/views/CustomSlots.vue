<template>
  <h1>Slots</h1>

  <button @click="handleModal">Abrir modal</button>
  <modal
    v-if="openModal"
    @add="pruebaChildEmit"
    @on:close="(event) => (openModal = event)"
    title="Hola mundo"
    
  >
    <!--  <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quam
      ducimus ipsam non eum accusamus commodi beatae sit? Sunt itaque quo in
      excepturi amet voluptatibus ducimus officiis explicabo impedit voluptate.
    </p>
    <button @click="handleModal">Salir</button>
 -->

    
    <template v-slot:footer>
      <button @click="handleModal">Salir</button>
    </template>

    <template v-slot:body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quam
        ducimus ipsam non eum accusamus commodi beatae sit? Sunt itaque quo in
        excepturi amet voluptatibus ducimus officiis explicabo impedit
        voluptate.
      </p>
    </template>

    <template v-slot:header>
      <h2>Titulo del mondal</h2>
    </template>

    <template v-slot:exposed="{newTitle}">
        <h2>{{ newTitle }}</h2>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  emits: ["on:close"],
  setup() {
    const openModal = ref(false);
    const handleModal = () => {
      openModal.value = !openModal.value;
    };

    const pruebaChildEmit = (event) => {
      console.log(event);
    };

    return {
      handleModal,
      openModal,
      pruebaChildEmit,
    };
  },
};
</script>

<style></style>
