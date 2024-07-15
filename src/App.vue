<template>
  <router-view :key="$route.fullPath" />
</template>

<script setup>
defineOptions({
  name: "App",
});
</script>
