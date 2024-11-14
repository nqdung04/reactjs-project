// useUserStore.js
import { create } from 'zustand';
import axios from 'axios';

// Tạo Zustand store
const useUserStore = create((set) => ({
  user: null,           // State để lưu thông tin người dùng
  loading: false,       // State để theo dõi trạng thái loading
  error: null,          // State để lưu lỗi nếu có

  // Action để fetch user từ API
  fetchUser: async () => {
    set({ loading: true, error: null }); // Bắt đầu fetch, set loading
    try {
      const response = await axios.get(
        'https://raw.githubusercontent.com/chienduc91/reactjs-config/refs/heads/main/user.json'
      );
      const userData = response.data.data;
      set({ user: userData, loading: false }); // Lưu thông tin vào store
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useUserStore;
