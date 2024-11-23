<template>
  <div>
    <v-alert>
      Dashboard
    </v-alert>
  </div>
</template>
<script setup>
useHead({
  title: 'Dash',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Dashboard';
  }
})
</script>
