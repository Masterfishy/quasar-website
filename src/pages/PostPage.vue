// Displays a post
<template>
  <q-page>
    <div class="page" v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </q-page>
</template>

<script setup>
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
