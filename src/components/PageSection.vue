<template>
  <div class="row q-pt-xl">
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
.fill {
  flex: 1 0 0;
}
</style>
