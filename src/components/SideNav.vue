<template>
  <div class="sidenav">
    <div class="sidenav--logo" @click="backToDashboard">
      <img :src="logo" alt="Logo" />
      <p>检测MVP</p>
    </div>
    <div class="sidenav--menu">
      <RouterLink to="/">主页</RouterLink>
      <RouterLink to="/tld-test">TLD检测</RouterLink>
      <RouterLink to="/equipments">设备管理</RouterLink>
      <RouterLink to="/projects">项目管理</RouterLink>
      <RouterLink to="/departments">部门管理</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/logos/logo.svg";

function backToDashboard() {}
</script>
<style scoped lang="scss">
.sidenav {
  height: 100dvh;
  height: 100vh;
  width: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 0;
  &--logo {
    display: flex;
    margin-bottom: 50px;
    img {
      margin-right: 5px;
    }
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 39px;
      letter-spacing: 0.01em;
    }
  }
  &--menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & a {
      color: rgba(145, 151, 179, 1);
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.01em;
      text-decoration: none;
      border-radius: 8px;
      padding: 11px;
      min-width: 250px;
      &:visited {
        color: rgba(145, 151, 179, 1);
      }
      &:hover {
        color: white;
        background-color: #5932ea;
      }
    }
  }
}
</style>
