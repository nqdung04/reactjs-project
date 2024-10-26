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
        <div style={styles.mainContainer}>
            {/* Khung chứa hai khung nhỏ */}
            <div style={styles.sideContainer}>
                {/* Khung chứa ảnh và email */}
                <div style={styles.topSection}>
                    <img src={userData.avatar} alt="Avatar" style={styles.avatar} />
                    <h2 style={{ color: 'purple', fontWeight: 'bold', margin: '10px 0' }}>
                        {email}
                    </h2>
                    <p style={{ margin: '5px 0' }}>
                        {userData.email}
                    </p>
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
                    <Link to="user-settings">Chỉnh sửa thông tin cá nhân</Link>
                </div>
            </div>

            {/* Khung trống lớn nằm cạnh */}
            <div style={styles.largeSection}></div>
        </div>
    );
};

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '20px',
    },
    sideContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '350px',
    },
    topSection: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        borderRadius: '10px',
        backgroundColor: 'white',
        textAlign: 'left',
    },
    largeSection: {
        flex: 1,
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'white',
        minHeight: '597px', // Chiều cao tối thiểu của khung lớn
    },
    message: {
        color: 'red',
    },
};

export default User;
