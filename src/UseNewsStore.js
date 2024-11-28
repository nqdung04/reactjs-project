import { create } from 'zustand';

const useNewsStore = create((set, get) => ({
  news: [],
  savedArticles: [],

  fetchNews: async () => {
    if (get().news.length === 0) {
      const response = await fetch('https://raw.githubusercontent.com/chienduc91/reactjs-config/refs/heads/main/news.json');
      const data = await response.json();
      set({ news: data.data.map((item) => ({ ...item, likes: 0, comments: [] })) });
    }
  },

  saveArticle: (article) => set((state) => {
    if (!state.savedArticles.some((item) => item.id === article.id)) {
      return { savedArticles: [...state.savedArticles, article] };
    }
    return state;
  }),

  removeArticle: (articleId) => set((state) => ({
    savedArticles: state.savedArticles.filter((item) => item.id !== articleId),
  })),

  isArticleSaved: (articleId) => get().savedArticles.some((item) => item.id === articleId),

  likeArticle: (articleId) => set((state) => {
    const updateLikes = (list) =>
      list.map((item) => (item.id === articleId ? { ...item, likes: item.likes + 1 } : item));

    return {
      news: updateLikes(state.news),
      savedArticles: updateLikes(state.savedArticles),
    };
  }),

  addComment: (articleId, comment) => set((state) => {
    const updateComments = (list) =>
      list.map((item) =>
        item.id === articleId
          ? { ...item, comments: [...item.comments, comment] }
          : item
      );

    return {
      news: updateComments(state.news),
      savedArticles: updateComments(state.savedArticles),
    };
  }),
}));

export default useNewsStore;
