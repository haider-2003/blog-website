<!-- just testing the real time  -->
<template>
  <h1>real time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("created", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(docs);
        posts.value = docs;
      });
    return { posts };
  },
};
</script>

<style></style>
