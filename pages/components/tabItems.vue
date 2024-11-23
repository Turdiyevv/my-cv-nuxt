<template>
  <div class="pa-7">
    <v-tabs
      v-model="tab"
      align-tabs="start"
    >
      <v-tab :value="1">Initial</v-tab>
      <v-tab :value="2">Challenge</v-tab>
      <v-tab :value="3">Achievement</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="n in 3"
        :key="n"
        :value="n"
      >
        <v-row class="ma-0" style="color: #ffffff">
          <v-col cols="12" md="4">
            <div class="my-5">
              <h1>Plan</h1>
              <h3>{{text1}}</h3>
            </div>
            <div class="rounded__style">
              <h1>""</h1>
              <h3>{{ text2 }}</h3>
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <div class="right__style">
              <v-img src="/public/svg/working.svg" height="500px"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>

    <div class="d-flex justify-center mt-10">
      <h1 style="color: #ffffff">Easier than ever</h1>
    </div>
    <div class="d-flex align-center justify-center my-7">
      <v-btn size="large" icon="mdi-bag-checked" rounded="xl" color="#2042B2"></v-btn>
      <div class="line__style"></div>
      <v-btn size="large" icon="mdi-axis-arrow" rounded="xl" color="#1F2937"></v-btn>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const tab = ref(null);
const text1 = ref('Dividing big ideas into teams-driven pieces with user stories')
const text2 = ref(' Those who dedicate themselves to their goals and work with dedication find their true place in life and ultimately discover genuine happiness.')
</script>

<style scoped>
.line__style{
  height: 15px;
  width: 500px;
  background: linear-gradient(91deg, rgb(32, 66, 178) 20%, rgb(31,41,55) 100%);
}
.rounded__style{
    padding: 20px;
    margin-top: 12px;
    background: linear-gradient(91deg, rgb(5, 7, 12) 30%, rgb(32, 66, 178) 100%);
    border-radius: 0 112px 112px 0;
}
.right__style{
  height: 100%;
  background-color: #1F2937;
  border-radius: 12px;
}
</style>
