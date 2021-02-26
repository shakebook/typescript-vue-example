<template>
  <h2>{{ accountName }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    accountName: {
      type: String,
      require: true,
    },
  },
});
</script>
