<template>
  <div>
    <cos-uploader v-if="!file" :label="label" @file-uploaded="onFileUploaded" />
    <div v-if="file">
      {{ file.name + file.ext }}
      <q-btn @click="reUpload">重新上传</q-btn>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  file: {
    type: Object,
    default() {
      return null;
    }
  }
});
import CosUploader from '../composables/CosUploader.js';

const emit = defineEmits(['update:file']);
const onFileUploaded = file => {
  emit('update:file', file);
};

const reUpload = () => {
  emit('update:file', null);
};
</script>

<style scoped></style>
