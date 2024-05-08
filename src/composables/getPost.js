import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

export const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("posts").doc(id).get();
      if (!res.exists) throw new Error("Could not find post");
      post.value = { id: res.id, ...res.data() };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};
