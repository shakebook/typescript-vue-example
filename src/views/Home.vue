<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      get home state:{{ account.accountName }}
      <button @click.prevent="changeAccount">change home state in home</button>
    </div>
    <br />
    <div>
      get abount state:{{ about.count }}
      <button @click.prevent="changeCounter">
        change abount state in home
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
import * as homeTypes from "@/store/home/types";
import * as abountTypes from "@/store/about/types";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const { home, about } = store.state;

    const changeAccount = () => {
      //store.commit(homeTypes.CHANGE_ACCOUNT, "zhangnianxia");
      store.dispatch("home/" + homeTypes.CHANGE_ACCOUNT);
    };
    const changeCounter = () => {
      store.commit("about/" + abountTypes.CHANGE_COUNTER, 9.8);
    };
    const account = computed(() => home.account);

    return { account, about, changeAccount, changeCounter };
  },
});
</script>
