<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; height: 300px">
      <q-card-section>
        <div class="text-h6">添加用户</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="username"
          label="账号"
          autofocus
          @keyup.enter="show = false"
        />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="password"
          label="密码"
          autofocus
          type="password"
          @keyup.enter="show = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn label="确认" color="primary" @click="createUser" />
        <q-btn flat label="取消" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
const username = ref('');
const password = ref('');
const show = ref(true);
import { ref } from 'vue';
import { create } from '../../api/user.js';
import { Notify } from 'quasar';
const emmit = defineEmits(['create-success']);
const createUser = () => {
  create({ username: username.value, password: password.value }).then(res => {
    show.value = false;
    Notify.create({
      type: 'positive',
      message: '创建成功',
      position: 'top'
    });
    emmit('create-success');
  });
};
</script>

<style scoped></style>
