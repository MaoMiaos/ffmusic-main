<template>
  <q-dialog v-model="show" persistent @hide="$emit('hide')">
    <q-card style="min-width: 350px; height: 300px">
      <q-card-section>
        <div class="text-h6">创建新用户</div>
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
          @keyup.enter="show = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          flat
          label="确认"
          color="primary"
          @click="createUser(username, password)"
        />
        <q-btn flat label="取消" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
const username = ref('');
const password = ref('');
import { ref } from 'vue';
import { useCreateUser } from '../../composables/useCreateUser.js';
const show = ref(true);
const { createUser } = useCreateUser(username, password);
</script>

<style scoped></style>
