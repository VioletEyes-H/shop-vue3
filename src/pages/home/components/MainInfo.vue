<template>
  <view>
    <view class="info_card">
      <view class="info_card_title">
        <view class="title">
          广州白云店
          <up-icon name="arrow-right" size="26rpx"/>
        </view>
        <!--        <view class="address">-->
        <!--          <up-icon name="map-fill" size="24rpx" color="#FF7530"/>-->
        <!--          距离您5.88km-->
        <!--        </view>-->
      </view>
      <view class="info_card_switch">
        <view class="text" :class="deliveryType === 'self'?'text_active':''" @click="deliveryType = 'self'">自取</view>
        <view class="text" :class="deliveryType === 'takeout'?'text_active':''" @click="deliveryType = 'takeout'">外卖
        </view>
      </view>
    </view>
    <view class="address_info">
      <up-icon name="map-fill" size="24rpx" color="#FF7530"/>
      <view style="margin-left: 8rpx">广州市白云区xx街道xxx路xxx号 <span style="color: rgba(0,0,0,0.4);margin-left: 16rpx">5.88km</span></view>
    </view>
  </view>
</template>

<script setup lang="ts">

const deliveryType = ref('self');//self 自取  takeout 外卖

</script>

<style scoped lang="scss">
.info_card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32rpx;

  .info_card_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8rpx;

    .title {
      display: flex;
      font-size: 28rpx;
      align-items: center;
    }

    .address {
      display: flex;
      font-size: 20rpx;
      align-items: center;
      gap: 8rpx;
    }
  }

  .info_card_switch {
    display: flex;
    border-radius: 50rpx;
    background-color: #E9E9E9;

    .text {
      padding: 8rpx 16rpx;
      font-size: 24rpx;
      border-radius: 50rpx;
    }

    .text_active {
      background-color: #FF7530;
      color: white;
    }
  }
}

.address_info {
  display: flex;
  font-size: 20rpx;
  margin-left: 30rpx;
  margin-right: 30rpx;
}
</style>
