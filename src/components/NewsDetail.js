// NewsDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoreNews from './MoreNews'; // Import MoreNews component

const NewsDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [newsData, setNewsData] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null); // State cho tin tức được chọn

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/chienduc91/reactjs-config/refs/heads/main/news.json')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data); // Log toàn bộ dữ liệu
                setNewsData(data.data); // Lưu data vào state newsData
            })
            .catch(error => console.error('Error fetching news data:', error));
    }, []);

    useEffect(() => {
        // Tìm tin tức dựa trên ID
        if (newsData.length > 0) {
            const news = newsData.find(news => news.id.toString() === id);
            setSelectedNews(news);
        }
    }, [id, newsData]);

    if (!selectedNews) {
        return <div>Đang tải...</div>; // Hiển thị khi chưa có tin tức
    }

    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <div style={styles.newsItem}>
                    <h2 style={styles.title}>{selectedNews.title}</h2>
                    <p style={styles.url}><a href={selectedNews.url} target="_blank" rel="noopener noreferrer">{selectedNews.url}</a></p>
                    <img src={selectedNews.image} alt={selectedNews.title} style={styles.image} />
                    <p style={styles.description}><strong>{selectedNews.description}</strong></p>
                </div>
            </div>

            {/* Sử dụng component MoreNews */}
            <MoreNews newsData={newsData} currentId={id} />
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        padding: '20px',
        backgroundColor: '#fff',
        minHeight: '100vh',
    },
    container: {
        width: '70%',
        padding: '20px',
    },
    newsItem: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'left',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    image: {
        width: '100%',
        height: '70vh',
        borderRadius: '8px',
        marginBottom: '15px',
    },
    url: {
        color: '#007BFF',
        textDecoration: 'underline',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        color: '#555',
    },
};

export default NewsDetail;
