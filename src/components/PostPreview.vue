<template>
  <div class="col-12 col-md bg-secondary cursor-pointer post_card">
    <q-card-section>
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
