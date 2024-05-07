// Displays a post
<template>
  <h1>Post {{ $route.params }}</h1>
</template>

<script setup>
import { postStore } from "src/stores/store";

import { onMounted } from "vue";

defineOptions({
  name: "PostPage",
});
</script>
