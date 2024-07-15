// Displays a post
<template>
  <q-page>
    <div class="page">
      <div v-if="post && !postStore.isFetching">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </div>
      <div
        v-else-if="postStore.isFetching"
        class="flex justify-center items-center full-width post-fetching-spinner"
      >
        <FetchIndicator />
      </div>
      <div v-else-if="!post && !postStore.isFetching">
        <p>Failed to load the post brother</p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import FetchIndicator from "src/components/FetchIndicator.vue";

import { postStore } from "src/stores/store";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";

defineOptions({
  name: "PostPage",
});

const $route = useRoute();
const post = ref(null);

watch(() => $route.params.id, getPost, { immediate: true });

function getPost(postId) {
  if (!postId) {
    return;
  }
  if (!postStore.posts[postId]) {
    postStore.fetchPost(postId).then(() => {
      post.value = postStore.posts[postId];
    });
  } else {
    post.value = postStore.posts[postId];
  }
}
</script>

<style lang="scss">
.post-fetching-spinner {
  height: calc(100vh - $toolbar-min-height);
}
</style>
