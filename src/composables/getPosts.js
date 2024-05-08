// get posts compable funopn
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

export const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore
        .collection("posts")
        .orderBy("created","desc")
        .get();
        console.log(res);
      posts.value = res.docs.map((doc) => {
        console.log(doc);
        return { id: doc.id, ...doc.data() };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};
