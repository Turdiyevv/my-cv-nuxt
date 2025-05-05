<template>
  <div style="background-color: #1f3fab; color: white; min-height: 50vh; border-radius: 12px; margin: 0 20px">
    <v-row class="ma-0">
      <v-col cols="12" md="4">
        <div v-for="(x, index) in 15" class="d-flex mt-1">
          <v-chip class="pa-2">{{index+1}}</v-chip>
          <div class="ml-2">
            site link
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <div class="d-flex flex-wrap justify-center">
          <div v-for="x in 15" class="items_style">
            test
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
</script>

<style scoped>
.items_style{
  margin: 9px;
  height: 152px;
  width: 252px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 white;
}
</style>
