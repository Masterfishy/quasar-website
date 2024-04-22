<template>
  <div class="row q-gutter- q-pt-xl section">
    <div class="col-12 col-md-3">
      <h2 class="section_header">{{ props.title }}</h2>
    </div>
    <div class="col-12 col-md-9">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "PageSection",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.section_header {
  font-size: 32px;
}
</style>
