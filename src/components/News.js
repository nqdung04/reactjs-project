// News.js
import React, { useState, useEffect } from 'react';

const News = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/chienduc91/reactjs-config/refs/heads/main/news.json')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data); // Log toàn bộ dữ liệu
                setNewsData(data.data); // Lưu data vào state newsData
            })
            .catch(error => console.error('Error fetching news data:', error));
    }, []);

    return (
        <div style={styles.container}>
            <p style={styles.title}>YESTERDAY <strong>NEWS</strong></p>
            <div style={styles.newsList}>
                {newsData.map((news) => (
                    <div key={news.id} style={styles.newsItem}>
                        <img src={news.image} alt={news.title} style={styles.image} />
                        <p style={styles.description}><strong>{news.description}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
    },
    title: {
        fontSize: '30px',
        marginRight: '65%',
    },
    newsList: {
        display: 'grid',
        gridTemplateColumns: '45% 45%', //Tạo 2 cột có kích thước = nhau
    },
    newsItem: {
        display: 'flex', // Đặt bố cục ngang cho mỗi item
        alignItems: 'center', // Căn giữa theo trục dọc
        padding: '7px',
        textAlign: 'left',
        marginLeft: '20px',
    },
    image: {
        width: '80px',
        height: 'auto',
        marginRight: '15px', // Tạo khoảng cách giữa ảnh và mô tả
        borderRadius: '10px',
    },
    description: {
        flex: 1, // Để mô tả chiếm hết khoảng trống còn lại
    },
};

export default News;
