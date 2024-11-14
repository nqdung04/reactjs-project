import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useNewsStore from './UseNewsStore';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { news, saveArticle, isArticleSaved } = useNewsStore();
  const article = news.find((item) => item.id === parseInt(id));

  if (!article) return <p>Bài viết không tồn tại</p>;

  const handleSave = () => {
    saveArticle(article.id);
  };

  return (
    <div className="news-detail-container">
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <button onClick={handleSave} disabled={isArticleSaved(article.id)}>
        {isArticleSaved(article.id) ? 'Đã lưu' : 'Lưu bài viết'}
      </button>
    </div>
  );
};

export default NewsDetail;
