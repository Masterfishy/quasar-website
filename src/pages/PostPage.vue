// Displays a post
<template>
  <q-page>
    <div class="page">
      <div v-if="post && !postStore.isFetching">
        <q-btn
          flat
          no-caps
          to="/posts"
          label="Back to portfolio page"
          icon="arrow_back"
        />
        <div class="post-html" v-html="renderMarkdown(post.content)"></div>
        <!-- <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p> -->
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

import DOMPurify from "dompurify";
import { marked } from "marked";

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

function renderMarkdown(markdown) {
  const postHtml = DOMPurify.sanitize(marked.parse(markdown));

  return postHtml ? postHtml : markdown;
}
</script>

<style lang="scss">
.post-fetching-spinner {
  height: calc(100vh - $toolbar-min-height);
}

.post-html {
  font-size: 16px;
}

.post-html h1 {
  font-size: 76px;
}

.post-html h2 {
  font-size: 32px;
  color: $accent;
}

.post-html h3 {
  font-size: 24px;
}

.post-html h4 {
  font-size: 20px;
}

.post-html a {
  color: $accent;
  transition: $generic-hover-transition;
}

.post-html a:hover {
  color: white;
  transition: $generic-hover-transition;
}

.post-html code {
  background-color: $secondary;
  // color: $accent;
}
</style>
