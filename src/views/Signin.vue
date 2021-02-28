<template>
  <div>
    <button @click.prevent="submit">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import axios from "axios";
import api from "@/api";
import { AUTH_TOKEN } from "@/api/auth";

export default defineComponent({
  name: "Signin",
  setup() {
    const store = useStore();
    const router = useRouter();

    const submit = () => {
      axios({
        method: "get",
        url: api.signin,
        data: {},
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem(AUTH_TOKEN, "abc");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return { submit };
  },
});
</script>
