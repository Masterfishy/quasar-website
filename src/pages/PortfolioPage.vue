// Will display all the posts
<template>
  <q-page>
    <div class="page">
      <h1>Portfolio</h1>
      <p class="portfolio-subtext">
        Read about some of my personal projects in the posts below!
      </p>
      <div class="row q-col-gutter-md">
        <PostPreview
          v-for="preview in postPreviewStore.previews"
          :key="preview.id"
          :preview="preview"
          class="col-12 col-sm-4"
          @click="$router.push(`/posts/${preview.post_id}`)"
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

<style lang="scss">
.portfolio-subtext {
  font-size: 20px;
}
</style>
