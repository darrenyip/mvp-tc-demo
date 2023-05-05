<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideNav from "./components/SideNav.vue";
</script>

<template>
  <div class="main-container">
    <side-nav />
    <RouterView />
  </div>
</template>

<style scoped>
.main-container {
  width: 100vw;
  background: #9197b3;
  display: flex;
}
</style>
