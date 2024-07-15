import { reactive } from "vue";
import { database } from "src/api";

export const postPreviewStore = reactive({
  previews: [],
  isFetching: false, // Loading state for the post previews store
  
  async fetchPreviews() {
    try {
      this.isFetching = true;

      this.previews = await database.fetchPostPreviews();

      this.isFetching = false;
    } catch (error) {
      console.error("Failed to fetch post previews:", error);
    }
  },
  setLoading(value) {
    this.isFetching = value;
  },
});

export const postStore = reactive({
  posts: {},
  isFetching: false, // Loading state of the post store
  async fetchPost(postId) {
    try {
      this.isFetching = true;

      const post = await database.fetchPost(postId);
      this.posts = { ...this.posts, [post[0].id]: post[0] };
      
      this.isFetching = false;
    } catch (error) {
      console.error(`Failed to fetch the post ${postId}:`, error);
    }
  },
  setLoading(value) {
    this.isFetching = value;
  },
});
