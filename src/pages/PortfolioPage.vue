// Will display all the posts
<template>
  <q-page>
    <div class="page">
      <h1>Posts</h1>
      <div class="row q-gutter-md">
        <PostPreview
          v-for="preview in postPreviewStore.previews"
          :key="preview.id"
          :preview="preview"
          @click="$router.push(`${preview.id}`)"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PostPreview from "src/components/PostPreview.vue";

import { onMounted } from "vue";
import { postPreviewStore } from "src/stores/store";

defineOptions({
  name: "PortfolioPage",
});

onMounted(() => {
  postPreviewStore.fetchPreviews();
});
</script>
