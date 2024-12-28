<template>
  <view>
    <view :style="{'height': statusBarHeight+'px'}" class="status_bar"></view>
    <view :style="{'height': navHeight}" class="content">
      <view class="left">
        <slot name="left">
          <view class="mini_nav" v-if="back && backType === 'mini'">
            <up-icon name="arrow-left" :color="backColor" size="18" @click="goBack"/>
            <up-line direction="column" :hairline="false" length="16" margin="0 8px"/>
            <up-icon name="home" size="20" :color="backColor" @click="backHome"/>
          </view>
          <view class="left_back" :style="{color:backColor}" v-if="back && backType === 'icon'" @click="goBack">
            <up-icon name="arrow-left" size="18" :color="backColor"/>
            {{ backText }}
          </view>
        </slot>
      </view>
      <view class="title">{{ title }}</view>
    </view>
  </view>

</template>

<script setup lang="ts">
const statusBarHeight = computed(() => {
  return uni.getWindowInfo().statusBarHeight
});

const navHeight = computed(() => {
  if (uni.getDeviceInfo().system.toUpperCase().indexOf("IOS") > -1) {
    return '40px' //IOS高度是44px
  } else {
    return '48px' //Android高度是48px
  }
})

onMounted(() => {
  console.log('device info==>', uni.getDeviceInfo())
})

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  back: {
    type: Boolean,
    default: false
  },
  backType: {
    type: String,
    default: 'icon'
  },
  backText: {
    type: String,
    default: '返回'
  },
  backColor: {
    type: String,
    default: '#000000'
  }
})

const goBack = () => {
  uni.navigateBack();
}
const backHome = () => {
  uni.switchTab({url: '/pages/home/Index'})
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .left {
    position: absolute;
    left: 6px;
  }

  .left_back {
    display: flex;
    align-items: center;
    margin-left: 16rpx;
  }
}

.status_bar {
  width: 100%;
}

.mini_nav {
  display: flex;
  height: 30px;
  width: 86px;
  border-radius: 44rpx;
  align-items: center;
  justify-content: center;
  border: 1rpx solid rgba(0, 0, 0, 0.1);
}
</style>
