import { ref, computed, watch } from "vue";
const useCounter = (initValue = 0) => {
  const counter = ref(initValue);
  const array = ref([1, 2, 3, 4, 5]);
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };

  const arrayCounter = () => {
    array.value.push(counter.value);
  };
  const potencia = computed(() => {
    return counter.value * counter.value;
  });

  watch(counter, (value, oldValue) => {
    arrayCounter();
  });

  watch(
    () => [...array.value],
    (value, oldValue) => {
      console.log("current array", value, "oldValue", oldValue);
    }
  );
  return {
    counter,
    increment,
    decrement,
    potencia,
    array,
    arrayCounter,
  };
};

export default useCounter;
