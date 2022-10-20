<template>
  <div class="name">{{ name }}</div> 
  <button
    v-on:click="updateName"
    class="btn btn-primary"
    >
    click
    </button>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('EunHye');
    // reactive
    // const name = reactive([]);
    //배열이나 오브젝트를 사용 시 reactive로 사용해보자.

    // const greeting = (name) => {
    //   return 'Hello, '+ name;
    // };
    // const greet = greeting(name);

    const updateName = () => {
      // ref .value를 꼭 사용!
      name.value = 'EunHye Sun';
      console.log(name);
    }

    return {
      name,
      updateName
      // greeting,
      // greet 
    }
  },
}
</script>

<style>
.name {color:green;font-size:20px;font-weight: bold;}
</style>