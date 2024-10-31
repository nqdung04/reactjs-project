import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const MoreNews = ({ newsData, currentId }) => {
    const textContainerRef = useRef(null);
    const [imageHeight, setImageHeight] = useState(60); // Chiều cao mặc định của ảnh

    useEffect(() => {
        if (textContainerRef.current) {
            setImageHeight(textContainerRef.current.clientHeight);
        }
    }, [newsData]); // Chạy lại khi newsData thay đổi

    return (
        <div style={styles.moreNewsContainer}>
            <h3 style={styles.moreNewsTitle}>More News</h3>
            {newsData.map((news) => (
                news.id.toString() !== currentId && ( // Loại bỏ tin hiện tại
                    <Link to={`/menu/user/news/${news.id}`} key={news.id} style={styles.moreNewsItem}>
                        <img src={news.image} alt={news.title} style={{ ...styles.moreNewsImage, height: imageHeight }} />
                        <div style={styles.textContainer} ref={textContainerRef}>
                            <p style={styles.newsTitle}><strong>{news.title}</strong></p>
                            <p style={styles.description}>{news.description}</p>
                        </div>
                    </Link>
                )
            ))}
        </div>
    );
};

const styles = {
    moreNewsContainer: {
        width: '25%',
        paddingLeft: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        marginLeft: '20px',
    },
    moreNewsTitle: {
        fontSize: '20px',
        margin: '10px 0',
    },
    moreNewsItem: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '10px',
        borderBottom: '1px solid #e0e0e0',
        textDecoration: 'none',
        color: 'inherit',
    },
    moreNewsImage: {
        width: '60px',
        height: '60px',
        marginRight: '10px',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    newsTitle: {
        fontSize: '16px',
        margin: '0 0 0 0',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
};

export default MoreNews;
