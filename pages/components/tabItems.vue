<template>
  <div class="pa-7">
    <v-tabs
      v-model="tab"
      align-tabs="start"
    >
      <v-tab :value="1">Texnik ko‘nikmalar</v-tab>
      <v-tab :value="2">Ta’lim</v-tab>
      <v-tab :value="3">Faoliyat</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <v-row class="ma-0" style="color: #ffffff">
          <v-col cols="12" md="4">
            <div class="my-5">
              <h1>Texnik ko‘nikmalar</h1>
            </div>
            <div class="rounded__style">
              <h1>""</h1>
              <div class="d-flex flex-wrap">
                <h3 v-for="item in gettext2F(text2)" class="mx-3" style="width: fit-content">{{'# '+item}}</h3>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <div class="right__style">
              <v-img src="/public/tabImg/working.svg" height="500px"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-tabs-window-item>
      <v-tabs-window-item :value="2">
        <v-row class="ma-0" style="color: #ffffff">
          <v-col cols="12" md="4">
            <div class="my-5">
              <h1>Ta’lim</h1>
            </div>
            <div class="rounded__style">
              <h1>""</h1>
              <h3>"TOSHKENT IRRIGATSIYA VA QISHLOQ XOʻJALIGINI MEXANIZATSIYALASH MUHANDISLARI INSTITUTI" MILLIY TADQIQOT UNIVERSITETI.</h3>
              <h4 class="mt-2">Ta'lim darajasi: Bakalavr</h4>
              <h4 class="mt-2">Davr: (2019-2023)</h4>
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <div class="right__style">
              <v-img src="/public/tabImg/university.png" height="500px"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-tabs-window-item>
      <v-tabs-window-item :value="3">
        <v-row class="ma-0" style="color: #ffffff">
          <v-col cols="12" md="4">
            <div class="my-5">
              <h1>Faoliyat</h1>
            </div>
            <div class="rounded__style">
              <h1>""</h1>
              <h3>Kompaniya: Plum technologies</h3>
              <h5 class="mt-2">
                <a href="https://plumtech.uz"></a>https://plumtech.uz</h5>
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <div class="right__style">
              <v-img src="/public/tabImg/broadcasting.png" height="500px"></v-img>
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
const text2 = ref('#HTML #css #javaScript #typeScript #tailwindCss #vuetify #vueJs2 #vueJs3 #reactJs #nextJs #nuxtJs #elementPlus #bootstrap #restApi #pinia #vuex #axios #figma')

const gettext2F = () => {
  const textMassive = text2.value
    .trim()                 // bosh va oxirgi bo‘sh joylarni olib tashlaydi
    .split('#')             // '#' bo‘yicha ajratadi
    .filter(Boolean)        // bo‘sh elementlarni olib tashlaydi
    .map(item => item.trim()); // har bir elementni tozalaydi

  console.log(textMassive);
  return textMassive;
}
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
