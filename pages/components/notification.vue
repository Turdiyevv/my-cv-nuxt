<template>
  <v-snackbar v-model="visible" :timeout="timeout" :color="type" top right>
    {{ message }}
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';

// State
const message = ref('');
const type = ref('success');
const visible = ref(false);
const timeout = 3000;
const showNotification = (msg, notificationType = 'success') => {
  message.value = msg;
  type.value = notificationType;
  visible.value = true;
};
defineExpose({
  showNotification,
});
</script>

<style scoped>
/* Customize the styles for the snackbar here if needed */
</style>
