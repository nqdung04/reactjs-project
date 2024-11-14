import { create } from 'zustand';

const useNewsStore = create((set) => ({
  news: [],
  savedArticles: [],

  // Lấy dữ liệu tin tức từ API
  fetchNews: async () => {
    const response = await fetch('https://raw.githubusercontent.com/chienduc91/reactjs-config/refs/heads/main/news.json');
    const data = await response.json();
    set({ news: data.data });
  },

  // Lưu bài viết
  saveArticle: (articleId) => set((state) => {
    if (!state.savedArticles.includes(articleId)) {
      return { savedArticles: [...state.savedArticles, articleId] };
    }
    return state;
  }),

  // Kiểm tra xem bài viết đã được lưu chưa
  isArticleSaved: (articleId) => (state) => state.savedArticles.includes(articleId)
}));

export default useNewsStore;
