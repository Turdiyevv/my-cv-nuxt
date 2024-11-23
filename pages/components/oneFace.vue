<template>
  <v-row class="ma-0 pa-0">
    <v-col class="pa-7" cols="12" sm="8">
      <h2>Welcome to Turdiyev's site</h2>
      <h3>Frontend Developer</h3>
      <div class="ability my-7">
        <h4># Communication skills</h4>
        <h4># Working capacity</h4>
        <h4># Single-mindedness</h4>
        <h4># Stress resistance</h4>
        <h4># Quick learning</h4>
      </div>
      <v-btn
          variant="flat" @click="showNotification('Movement does not exist!', 'warning')"
      >More...</v-btn>
    </v-col>
    <v-col class="pa-7" cols="12" sm="4">
      <div class="pa-1 rounded-xl" style="border:2px solid #55a7fa">
        <div class="photo-class"></div>
        <v-btn @click="showNotification('Movement does not exist!', 'warning')" width="98%"
            prepend-icon="mdi-download" color="success"
            variant="flat" size="small" class="rounded-xl mx-1"
        >Download example</v-btn>
      </div>
    </v-col>
    <notification  ref="notificationRef"/>
  </v-row>
</template>
<script setup>
  import {ref} from "vue";
  import Notification from "/pages/components/notification.vue";
  const notificationRef = ref(null);
  const showNotification = (message, type) => {
    if (notificationRef.value) {
      notificationRef.value.showNotification(message, type);
    }
  };
</script>
<style scoped>
.photo-class{
  height: 500px;
  border: 5px solid #22282C;
  border-radius: 24px;
  background-image: url("/public/images/resume.png") !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
h2,h3, .ability{
  color: #ffffff;
}
.ability, h3{
  opacity: 0.75;
}
h2{
  font-size: 50px;
}
h3{
  font-size: 45px;
}
</style>
