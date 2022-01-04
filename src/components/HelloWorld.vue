<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello";

const message = ref("ff音乐")
const count = ref(0)
const hello = () =>{
  sayHello().then(res=>{
    if(res.status !== 200){
      alert("Error")
    }
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
  <div class="q-pa-md q-gutter-y-md column items-start">
    <q-btn-group push>
      <q-btn push label="First" icon="timeline" />
      <q-btn push label="Second" icon="visibility" />
      <q-btn push label="Third" icon="update" />
    </q-btn-group>

    <q-btn-group push>
      <q-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
      <q-btn color="amber" glossy text-color="black" push label="Second" />
      <q-btn color="orange" glossy text-color="black" push label="Third" />
    </q-btn-group>

    <q-btn-group outline>
      <q-btn outline color="brown" label="First" />
      <q-btn outline color="brown" label="Second" icon-right="watch_later" />
      <q-btn outline color="brown" label="Third" />
    </q-btn-group>

    <q-btn-group>
      <q-btn color="secondary" glossy label="First" />
      <q-btn color="secondary" glossy label="Second" />
      <q-btn color="secondary" glossy label="Third" />
      <q-btn color="secondary" glossy label="Fourth" />
    </q-btn-group>

    <q-btn-group>
      <q-btn color="accent" icon="timeline" />
      <q-btn color="accent" icon="visibility" />
      <q-btn color="accent" icon="update" />
    </q-btn-group>

    <q-btn-group rounded>
      <q-btn color="amber" rounded glossy icon="timeline" />
      <q-btn color="amber" rounded glossy icon="visibility" />
      <q-btn color="amber" rounded glossy icon-right="update" label="Update" />
    </q-btn-group>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
