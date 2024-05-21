// Will display all the posts
<template>
  <q-page>
    <div class="page">
      <h1>Portfolio</h1>
      <div class="row q-col-gutter-md">
        <PostPreview
          v-for="preview in postPreviewStore.previews"
          :key="preview.id"
          :preview="preview"
          class="col-12 col-sm-4"
          @click="$router.push(`${preview.post_id}`)"
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
