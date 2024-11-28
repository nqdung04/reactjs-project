import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useNewsStore from './UseNewsStore';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { news, fetchNews, saveArticle, removeArticle, isArticleSaved, likeArticle, addComment } = useNewsStore();
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const loadNews = async () => {
      await fetchNews();
      setLoading(false);
    };

    if (!news.length) {
      loadNews();
    } else {
      setLoading(false);
    }
  }, [fetchNews, news]);

  const article = news.find((item) => item.id === parseInt(id));

  if (loading) return <p>Đang tải...</p>;
  if (!article) return <p>Bài viết không tồn tại</p>;

  const handleSave = () => {
    if (isArticleSaved(article.id)) {
      const confirmUnsave = window.confirm('Bạn chắc chắn muốn hủy lưu bài viết này không?');
      if (confirmUnsave) {
        removeArticle(article.id);
        alert('Bài viết đã được hủy lưu.');
      }
    } else {
      const confirmSave = window.confirm('Bạn muốn lưu bài viết này không?');
      if (confirmSave) {
        saveArticle(article);
        alert('Bài viết đã được lưu.');
      }
    }
  };

  const handleLike = () => {
    likeArticle(article.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(article.id, newComment.trim());
      setNewComment('');
    }
  };

  return (
    <div className="news-detail-container">
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <button onClick={handleSave}>
        {isArticleSaved(article.id) ? 'Đã lưu' : 'Lưu bài viết'}
      </button>
      <br />
      <button onClick={handleLike}>Thích bài viết</button>
      <p>Lượt thích: {article.likes}</p>
      
      <h3>Bình luận ({article.comments.length})</h3>

      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Nhập bình luận của bạn"
        />
        <button type="submit">Gửi bình luận</button>
      </form>
      
      {article.comments.length === 0 ? (
        <p>Hiện chưa có bình luận nào</p>
      ) : (
        <ul className="comment-list">
          {article.comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <img
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                alt="avatar"
                className="comment-avatar"
              />
              <p className="comment-text">{comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsDetail;
