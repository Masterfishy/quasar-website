<template>
  <div>
    <q-card-section class="bg-secondary cursor-pointer post_card">
      <h3>{{ preview.post_title }}</h3>
      <small>{{ preview.created_at }}</small>
      <p>{{ preview.description }}</p>
    </q-card-section>
  </div>
</template>

<script setup>
defineOptions({
  name: "PostPreview",
});

const props = defineProps({
  preview: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.post_card {
  border-radius: $generic-border-radius;
  height: 150px;
}
</style>
