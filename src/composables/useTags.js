import { ref } from "vue";

export const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  posts.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  tags.value = [...tagSet]
  return { tags}
};
