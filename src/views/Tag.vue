<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <h1>#{{ route.params.tag }}</h1>
    <div v-if="posts.length" >
      <PostList :posts="postsWithTag" />
  
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { getPosts } from "@/composables/getPosts";
import { computed } from "vue";
import Spinner from "@/components/Spinner.vue";
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    console.log(route.params.tag);
    const { posts, error, load } = getPosts();
    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });
    console.log(postsWithTag.value);
    

    return { route,posts, error, postsWithTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
} 
 </style>


<!-- 
    
 -->