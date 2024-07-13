<template>
  <div class="full-width">
    <img
      :src="$q.screen.gt.xs ? heroSvg : heroMobileSvg"
      alt="Oh hey, it's Zach Long"
      class="full-width"
    />
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import heroSvg from "src/assets/zachlong.svg";
import heroMobileSvg from "src/assets/zachlong-mobile.svg";

defineOptions({
  name: "HeroTitle",
});

const $q = useQuasar();
</script>

<style lang="scss"></style>
