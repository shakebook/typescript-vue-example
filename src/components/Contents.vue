<template>
  <div class="contens">
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Contents",
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.contens {
  flex: 1;
  background-color: #eaecf3;
  overflow-y: scroll;
  padding: 10px 10px 100px 10px;
}
</style>