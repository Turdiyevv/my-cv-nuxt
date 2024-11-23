<template>
  <v-app>
      <v-app-bar
          scroll-behavior="elevate" scroll-threshold="0"
          style="backdrop-filter: blur(10px) !important;
          background-color: #111827 !important;
          height: 70px!important;">
        <template v-slot:prepend>
          <v-icon color="white">mdi-menu</v-icon>
        </template>
        <v-app-bar-title class="d-flex justify-center">
          <div style="color: white">Turdiyev site</div>
        </v-app-bar-title>
        <template v-slot:append>
          <v-btn  color="white"
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="onClick('Movement does not exist!','warning')"
          ></v-btn>
          <v-btn @click="onClickLang('Movement does not exist!','warning')" color="white" size="small">Uz</v-btn>
          <v-btn @click="onClickLang('Movement does not exist!','warning')" class="mx-1" color="white" size="small">Ру</v-btn>
          <v-btn color="white" size="small">En</v-btn>
        </template>
      </v-app-bar>
      <v-main class="ma-0">
        <div style="background: linear-gradient(0deg, rgb(5,7,12) 10%, rgb(32,66,178) 100%);">
          <one-face/>
        </div>
        <div style="background-color: #05070CFF;">
          <tab-items/>
        </div>
        <div style="background-color: #05070CFF">
          <three-face/>
        </div>
        <div>
          <footer-page/>
        </div>
      </v-main>
<!--      <div>-->
<!--          <div class=" rounded-lg my-2">-->
<!--            <v-row class="ma-0">-->
<!--              <v-col cols="12" md="4" sm="6"-->
<!--                v-for="(item, index) in cardsData">-->
<!--                <v-card-->
<!--                    class="pa-3"-->
<!--                    :class="index % 2 === 1 ? 'animated-card' : 'animated-card-right'">-->
<!--                  <v-row class="ma-0 pa-0">-->
<!--                    <v-col cols="12" md="6">-->
<!--                      <v-chip>-->
<!--                        <h3>{{item.id}}</h3>-->
<!--                      </v-chip>-->
<!--                      <h3>{{item.name}}</h3>-->
<!--                    </v-col>-->
<!--                    <v-col class="img_block scrollable pa-0" cols="12" md="6">-->
<!--                      <div v-for="(slide, i) in images"-->
<!--                        :style="{-->
<!--                          backgroundImage: `url(${slide.url})`,-->
<!--                          backgroundSize: 'cover',-->
<!--                          backgroundPosition: 'center',-->
<!--                          backgroundRepeat: 'no-repeat',-->
<!--                          height: '196px',-->
<!--                          marginTop: '2px',-->
<!--                          marginBottom: '2px',-->
<!--                          borderRadius: '16px 10px 10px 16px',-->
<!--                        }"-->
<!--                      ></div>-->
<!--                    </v-col>-->
<!--                  </v-row>-->
<!--                  <v-btn @click="getData(item)"-->
<!--                        class="rounded-lg bg-orange my-1"-->
<!--                         style="color: white!important;"-->
<!--                         variant="elevated"-->
<!--                  >Ko'rish</v-btn>-->
<!--                </v-card>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </div>-->
<!--          <div class="main_style rounded-lg my-2">-->
<!--            <v-row class="ma-0 pa-0">-->
<!--              <div class="w-100 mx-8">-->
<!--                <v-chip v-if="mainData.id">-->
<!--                  <h3>{{mainData.id}}</h3>-->
<!--                </v-chip>-->
<!--                <h3>{{mainData.name}}</h3>-->
<!--                <h5>{{mainData.text}}</h5>-->
<!--              </div>-->
<!--              <v-col v-for="(slide) in images" class="d-flex justify-center ma-0 pa-0"-->
<!--                     cols="12" md="3" sm="6"-->
<!--              >-->
<!--                <a class="fancybox" data-fancybox="gallery" :href="slide.url"-->
<!--                style="-->
<!--                      height: 250px !important;-->
<!--                      width: 300px !important;-->
<!--                      display: flex;-->
<!--                      align-items: center;-->
<!--                      justify-content: center;-->
<!--                      border-radius: 10px;-->
<!--                      text-decoration: none;-->
<!--                      margin: 10px;-->
<!--                    ">-->
<!--                  <img-->
<!--                      style="-->
<!--                        background-size: cover;-->
<!--                        background-position: center;-->
<!--                        background-repeat: no-repeat;-->
<!--                        width: 100%;-->
<!--                        height: 100%;-->
<!--                        border-radius: 10px;-->
<!--                      "-->
<!--                       class="cursor-pointer" :src="slide.url" alt="img not found"/>-->
<!--                </a>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </div>-->
<!--          <div>-->
<!--            <v-row class="ma-0 pa-0">-->
<!--              <v-col cols="12" md="3" sm="6" class="pa-2">-->
<!--                <div>logo</div>-->
<!--              </v-col>-->
<!--              <v-col cols="12" md="3" sm="6" class="pa-2">-->
<!--                <div>{{missia}}</div>-->
<!--              </v-col>-->
<!--              <v-col cols="12" md="3" sm="6" class="pa-2">-->
<!--                <div>{{missia2}}</div>-->
<!--              </v-col>-->
<!--              <v-col cols="12" md="3" sm="6" class="pa-2">-->
<!--                <div>-->
<!--                  <div class="d-flex align-center" role="button">-->
<!--                    <v-btn icon="mdi-telegram" class="bg-blue"></v-btn>-->
<!--                    <h4>Telegram</h4>-->
<!--                  </div>-->
<!--                  <div class="d-flex align-center" role="button">-->
<!--                    <v-btn icon="mdi-instagram" class="bg-blue"></v-btn>-->
<!--                    <h4>Instagram</h4>-->
<!--                  </div>-->
<!--                  <div class="d-flex align-center" role="button">-->
<!--                    <v-btn icon="mdi-phone" class="bg-blue"></v-btn>-->
<!--                    <h4>Phone</h4>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </div>-->
<!--      </div>-->

    <notification  ref="notificationRef"/>
  </v-app>
</template>

<script setup>

useHead({
  title: 'Turdiyev blog',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Desinger';
  },
  meta: [
    { name: 'description', content: 'Bu sahifa uy dizaynlari haqida ma\'lumot beradi'},
    { name: 'keywords', content: 'blog, maqolalar, veb-dizayn, uy-dizaynlari, uylar' }
  ]
})
import '../assets/css/main.css'
import {ref} from "vue";
import OneFace from "/pages/components/oneFace.vue";
import Notification from "/pages/components/notification.vue";
import TabItems from "/pages/components/tabItems.vue";
import ThreeFace from "/pages/components/three-face.vue";
import FooterPage from "/pages/components/footerPage.vue";
const notificationRef = ref(null);
const theme = ref('light')

function onClick(message, type) {
    if (notificationRef.value) {
      notificationRef.value.showNotification(message, type);
    }
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
function onClickLang(message, type) {
    if (notificationRef.value) {
      notificationRef.value.showNotification(message, type);
    }
}

  const mainData =ref(
      {
        id: null,
        name: 'test checking name',
        text: 'main text'
      }
  );
  function getData(item){
    mainData.value = item
  }
  const cardsData = ref(
      [
        {
          id: 1,
          name: 'We build your dream house with our passion',
          text: 'Lorem ipsum dolor sit amet, consectetur' +
          'adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.' +
          'Faucibus nec gravida ipsum pulvinar vel.'
        },
        {
          id: 2,
          name: 'We build your dream house with our passion',
          text: 'Lorem ipsum dolor sit amet, consectetur' +
          'adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.' +
          'Faucibus nec gravida ipsum pulvinar vel.'
        },
        {
          id: 3,
          name: 'We build your dream house with our passion',
          text: 'Lorem ipsum dolor sit amet, consectetur' +
          'adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.' +
          'Faucibus nec gravida ipsum pulvinar vel.'
        },
        {
          id: 4,
          name: 'We build your dream house with our passion',
          text: 'Lorem ipsum dolor sit amet, consectetur' +
          'adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.' +
          'Faucibus nec gravida ipsum pulvinar vel.'
        },
        {
          id: 5,
          name: 'We build your dream house with our passion',
          text: 'Lorem ipsum dolor sit amet, consectetur' +
          'adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.' +
          'Faucibus nec gravida ipsum pulvinar vel.'
        },
        {
          id: 6,
          name: 'We build your dream house with our passion',
          text: 'Lorem ipsum dolor sit amet, consectetur' +
          'adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.' +
          'Faucibus nec gravida ipsum pulvinar vel.'
        },
      ]
  )

  const missia = ref(
      `missiyasi brendlar va mahsulotlarni eng katta auditoriya oldida
      targ'ib qilish bo'lishi mumkin. Tashqi reklama `
  )
  const missia2 = ref(
      ` kompaniyasining maqsadi odamlarning e'tiborini jalb qilish, Kompaniyamiz samarali tashqi reklama orqali brendlarga potentsial iste'molchilarga
      maksimal ta'sir ko'rsatishga yordam beradi.`
  )

</script>
