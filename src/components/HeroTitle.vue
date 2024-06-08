<template>
  <svg viewBox="0 0 100 40" class="responsive-svg">
    <text fill="#fff" x="0" y="15" class="svg_hook">Oh hey it's</text>
    <text fill="#fff" x="0" y="30" class="svg_title">Zach Long</text>
  </svg>
</template>

<script setup>
defineOptions({
  name: "HeroTitle",
});
</script>

<style lang="scss">
.responsive-svg {
  width: 100%;
  height: auto;
  display: block;
}

$svg-title-font-size: 14px;
$svg-title-base-width: 6.888;

.svg_hook {
  font-size: calc(0.3 * $svg-title-font-size);
}

.svg_title {
  font-size: $svg-title-font-size;
  letter-spacing: calc(100px - $svg-title-font-size * $svg-title-base-width);
}
</style>
