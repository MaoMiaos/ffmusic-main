<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello";

const message = ref("ff音乐")
const count = ref(0)
const hello = () =>{
  sayHello().then(res=>{
    console.log(res.data);
    message.value = res.data;
  })
}
</script>
<template>
  <h1>{{message}}</h1>
  <div class="button-container">
    <q-btn color="primary"  @click="count++">点击次数{{count}}</q-btn>
    <br><br>
    <q-btn color="primary"  @click="hello">请求接口</q-btn>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
