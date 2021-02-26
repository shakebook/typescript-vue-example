<template>
  <div class="about">
    <h1>{{ home.account.accountName }}-{{ about.count }}</h1>
    <HelloWorld :accountName="home.account.accountName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: { HelloWorld },
  name: "Abount",
  setup() {
    const { home, about } = useStore().state;
    return { about, home };
  },
});
</script>