import { createStore } from "vuex";
import { fetchPost, fetchPostPreviews } from "src/api/database";

const store = createStore({
  store: {
    posts: {},
    postPreviews: [],
  },
  mutations: {
    addPost(state, post) {
      state.posts = { ...state.posts, [post.id]: post };
    },
    setPostPreviews(state, postPreviews) {
      state.postPreviews = postPreviews;
    },
  },
  actions: {
    async fetchPost({ commit }, postId) {
      try {
        const post = await fetchPost(postId);
        commit("addPost", post);
      } catch (error) {
        console.error(`Error fetching post ${postId}:`, error);
      }
    },
    async fetchPostPreviews({ commit }) {
      try {
        const previews = await fetchPostPreviews();
        commit("setPostPreviews", previews);
      } catch (error) {
        console.error("Error fetching post previews:", error);
      }
    },
  },
  getters: {
    getPostPreviews(state) {
      return state.postPreviews;
    },
    getPostById: (state) => (postId) => {
      return state.posts[postId];
    },
  },
});

export default store;
