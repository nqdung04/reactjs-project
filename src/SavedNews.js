import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useNewsStore from './UseNewsStore';

const SavedNews = () => {
  const { savedArticles, fetchNews } = useNewsStore();
  const navigate = useNavigate(); // Sử dụng hook navigate của react-router-dom

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  console.log('--savedArticles--', savedArticles)
  // Hàm xử lý khi người dùng nhấn vào ô tin tức
  const handleNewsClick = (articleId) => {
    navigate(`/news/${articleId}`); // Chuyển hướng đến trang chi tiết bài viết
  };

  return (
    <div className="news-container">
      <button
        style={{ marginTop: '20px', display: 'inline-block' }}
        onClick={() => navigate('/')} // Quay lại trang thông tin người dùng
      >
        Trang User
      </button>

      <button
        style={{ marginTop: '20px', display: 'inline-block' }}
        onClick={() => navigate('/news')} 
      >
        Danh sách News
      </button>

      <h2>Tin tức đã lưu</h2>
      <div className="news-grid">
        {savedArticles.map((article) => (
          <div
            key={article.id}
            className="news-item"
            onClick={() => handleNewsClick(article.id)} // Gọi hàm khi nhấn vào ô tin tức
          >
            <img
              src={article.image}
              alt={article.title}
              className="news-image"
            />
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
            <p>Lượt thích: {article.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedNews;
