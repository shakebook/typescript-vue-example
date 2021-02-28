<template>
  <div class="background">
    <Header />
    <div class="body">
      <Sidebar />
      <Contents />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Contents from "@/components/Contents.vue";

export default defineComponent({
  components: { Sidebar, Header, Contents },
  name: "Home",
  setup() {},
});
</script>
<style scoped>
.background {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.body {
  flex: 1;
  background-color: orange;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
</style>