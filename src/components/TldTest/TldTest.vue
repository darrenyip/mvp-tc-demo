<template>
  <div class="container tld">
    <div class="white-card tld-summary mb-2">
      <div class="tld-summary--item">
        <div class="tld-summary--item__title">待检测</div>
        <div class="tld-summary--item__number">100</div>
        <div class="tld-summary--item__comparison">
          <img :src="greenUpArrow" alt="green-up-arrow" />
          <p>
            <span class="up-arrow">{{ number1 }} %</span> 相对于上月
          </p>
        </div>
      </div>
      <div class="tld-summary--item">
        <div class="tld-summary--item__title">已测</div>
        <div class="tld-summary--item__number">20</div>
        <div class="tld-summary--item__comparison">
          <img :src="greenUpArrow" alt="green-up-arrow" />
          <p>
            <span class="up-arrow">{{ number2 }} %</span> 相对于上月
          </p>
        </div>
      </div>
      <div class="tld-summary--item">
        <div class="tld-summary--item__title">异常</div>
        <div class="tld-summary--item__number">5</div>
        <div class="tld-summary--item__comparison">
          <img :src="redDownArrow" alt="red-up-arrow" />
          <p>
            <span class="down-arrow">{{ number3 }} %</span> 相对于上月
          </p>
        </div>
      </div>
    </div>
    <div class="tld-menu">
      <div class="menu-button">检测详情</div>
      <div class="menu-button">录入检测信息</div>
      <div class="menu-button">扫码创建</div>
    </div>
  </div>
</template>

<script setup>
import greenUpArrow from "../../assets/icons/green-up-arrow.svg";
import redDownArrow from "../../assets/icons/red-down-arrow.svg";
let number1 = 20;
let number2 = 50;
let number3 = 5;
</script>

<style scoped lang="scss">
.tld-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tld-summary--item {
  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #acacac;
  }
  &__number {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    color: #333333;
  }
  &__comparison {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #292d32;
    & p {
      padding-top: 3px;
    }
    & span.up-arrow {
      color: rgba(0, 172, 79, 1);
    }
    & span.down-arrow {
      color: rgba(208, 0, 75, 1);
    }
  }
}
.tld-menu {
  display: flex;
  gap: 1rem;
}
</style>
