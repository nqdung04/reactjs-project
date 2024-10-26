import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const email = localStorage.getItem('email');
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/user.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setUserData(data.data);
            })
            .catch((error) => {
                setMessage('Có lỗi xảy ra khi lấy thông tin người dùng.');
                console.error('Error fetching user data:', error);
            });
    }, []);

    if (!userData) {
        return <div>Đang tải...</div>;
    }

    return (
        <div style={styles.container}>
            {/* Khung chứa ảnh và email */}
            <div style={styles.topSection}>
                <img src={userData.avatar} alt="Avatar" style={styles.avatar} />
                <p>{email}</p>
            </div>

            {/* Khung chứa các thông tin cá nhân */}
            <div style={styles.infoSection}>
                <h2>Information</h2>
                <p><strong>Họ tên:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Số điện thoại:</strong> {userData.phone}</p>
                <p><strong>Địa chỉ:</strong> {userData.address}</p>
                <p><strong>Website:</strong> {userData.website}</p>
                <p><strong>Công ty:</strong> {userData.company}</p>
                {message && <p style={styles.message}>{message}</p>}
                {/* Nút chỉnh sửa thông tin cá nhân */}
                <Link to="user-settings">
                    Chỉnh sửa thông tin cá nhân
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        width: '350px',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px', // Tạo khoảng cách giữa các khung
    },
    topSection: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    infoSection: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        width: '100%',
        height: '70%',
        textAlign: 'left',
    },
    message: {
        color: 'red',
    },
};

export default User;
