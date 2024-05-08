<!-- postlist compnone t -->
<template>
  <div class="post-list">
    <div v-for="post in postList" :key="post.id">
      <SinglePost :post="post" :deletePost="deletePost" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup({ posts }) {
    const postList = ref(posts);
    const deletePost = (id) => {
      postList.value = postList.value.filter((post) => post.id !== id);
    };
    return { postList, deletePost };
  },
};
</script>

<style></style>
