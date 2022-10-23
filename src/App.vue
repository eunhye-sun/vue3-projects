<template> 
<!-- v-bind: :생략가능 -->
<!-- v-on: = @ -->
<!-- v-medel value 바인딩도 해주고, 값이 변경될때 데이터까지 같이 업데이트해주는 역활까지 제공.  -->
  <!-- <div :class="nameClass">{{ name }}</div>  -->
  <input 
  type="text" 
  v-model="name"
  >
  <!-- <input v-bind:type="type" v-bind:value="name"> -->
  <button
    @click="onSubmit"
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
    // const type = ref('number');
    // const nameClass = ref('');

    // reactive
    // const name = reactive([]);
    //arrey나 오브젝트를 사용 시 reactive로 사용해보자.

    // const greeting = (name) => {
    //   return 'Hello, '+ name;
    // };
    // const greet = greeting(name);

    // const updateName = () => {
      // ref .value를 꼭 사용!
      // name.value = 'Sun';
      // type.value = 'text';
      // nameClass.value = 'name';
      // console.log(name);
    // }
    const onSubmit = () => {
      console.log(name.value);
    };
    // const updateName = (e) => {
    //   name.value = e.target.value;
    //   // console.log(e.target.value);
    // }

    return {
      name,
      onSubmit,
      // updateName,
      // type,
      // nameClass
      // greeting,
      // greet 
    }
  },
}
</script>

<style>
.name {color:green;font-size:20px;font-weight: bold;}
</style>
<!-- 태그의 속성값에 v-bind 사용 -->
