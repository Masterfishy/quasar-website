import { reactive } from "vue";
import { database } from "src/api";

export const postPreviewStore = reactive({
  previews: [],
  async fetchPreviews() {
    try {
      this.previews = await database.fetchPostPreviews();
    } catch (error) {
      console.error("Error fetching post previews:", error);
    }
  },
});

export const postStore = reactive({
  posts: {},
  async fetchPost(postId) {
    try {
      const post = await database.fetchPost(postId);
      this.posts = { ...this.posts, [post.id]: post };
    } catch (error) {
      console.error(`Error fetching post ${postId}:`, error);
    }
  },
});
