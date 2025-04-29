<template>
  <v-row class="ma-0 pa-0">
    <v-col class="pa-7" cols="12" md="8">
      <h2 class="text-h4 text-md-h3">Sherbek Turdiyev - Frontend developer</h2>
      <h3 class="text-h5 text-md-h4">Frontend Developer</h3>
      <div class="d-flex">
        <div class="ability my-7 mr-3">
          <h4># Communication skills</h4>
          <h4># Working capacity</h4>
          <h4># Single-mindedness</h4>
          <h4># Stress resistance</h4>
          <h4># Quick learning</h4>
        </div>
        <div class="ability my-7">
          <h4># Muloqot qobiliyatlari</h4>
          <h4># Ish qobiliyati</h4>
          <h4># Yakka fikrlilik</h4>
          <h4># Kuchlanishga chidamlilik</h4>
          <h4># Tez o‘rganish</h4>
        </div>
      </div>
      <v-btn variant="flat" @click="openPortfolio"
      >More...</v-btn>
    </v-col>
    <v-col class="pa-7 d-flex justify-end" cols="12" sm="7" md="4">
      <div class="pa-1 rounded-xl" style="border:2px solid #55a7fa; max-width: 405px">
        <div class="photo-class d-flex justify-end align-end">
          <v-btn @click="showNotification('Movement does not exist!', 'warning')"
              prepend-icon="mdi-download" color="success" size="small" class="rounded-xl ma-1"
          >Download</v-btn>
        </div>
      </div>
    </v-col>
    <notification  ref="notificationRef"/>
  </v-row>
</template>
<script setup>
  import {ref} from "vue";
  import Notification from "/pages/components/notification.vue";
  import {useRouter} from "#app";
  const router = useRouter();
  const notificationRef = ref(null);
  const showNotification = (message, type) => {
    if (notificationRef.value) {
      notificationRef.value.showNotification(message, type);
    }
  };
  const openPortfolio = () => {
    router.push("/dashboard");
  }
</script>
<style scoped>
.photo-class{
  height: 500px;
  width: 392px;
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
