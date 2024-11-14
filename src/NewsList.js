import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useNewsStore from './UseNewsStore';
import './NewsList.css';

const NewsList = () => {
  const { news, fetchNews } = useNewsStore();
  const navigate = useNavigate(); // Sử dụng hook navigate của react-router-dom

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

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
        Back to User Info
      </button>
      <h2>Danh sách Tin tức</h2>
      <div className="news-grid">
        {news.map((article) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
