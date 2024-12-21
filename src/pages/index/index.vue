<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"/>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="btnClick">跳转</button>
    <up-button text="月落"></up-button>

  </view>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const title = ref('Hello')
let route = useRouter()
function btnClick() {
  console.log('跳转')
  route.push({name:"user"})
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
