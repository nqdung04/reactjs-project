import React, { useState } from 'react';

const User = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (currentPassword !== password) {
            setMessage('Mật khẩu hiện tại không đúng!');
            return;
        }
        if (newPassword !== confirmPassword) {
            setMessage('Mật khẩu mới không khớp!');
            return;
        }

        localStorage.setItem('password', newPassword);
        setMessage('Đổi mật khẩu thành công!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    const handleDeleteAccount = () => {
        setShowDeleteConfirm(true);
    };

    const confirmDeleteAccount = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        setMessage('Xóa tài khoản thành công!');

        // Đăng xuất sau 1 giây
        setTimeout(() => {
            window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
        }, 1000);
    };

    const cancelDeleteAccount = () => {
        setShowDeleteConfirm(false);
    };

    return (
        <div style={styles.container}>
            <h1>Thông tin cá nhân</h1>
            <p><strong>Email:</strong> {email}</p>
            <p>
                <strong>Password:</strong> 
                {showPassword ? password : ''}
                <button onClick={togglePasswordVisibility} style={styles.toggleButton}>
                    {showPassword ? 'Ẩn' : 'Hiện'}
                </button>
            </p>

            <form onSubmit={handleChangePassword} style={styles.form}>
                <h2>Đổi Mật Khẩu</h2>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Mật khẩu hiện tại" 
                    value={currentPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Mật khẩu mới" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Xác nhận mật khẩu mới" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Đổi Mật Khẩu</button>
            </form>

            <p style={styles.message}>{message}</p>

            <h2>Xóa Tài Khoản</h2>
            <button onClick={handleDeleteAccount} style={styles.deleteButton}>Xóa Tài Khoản</button>

            {showDeleteConfirm && (
                <div style={styles.confirmDelete}>
                    <p>Bạn có chắc chắn muốn xóa tài khoản không?</p>
                    <button onClick={confirmDeleteAccount} style={styles.confirmButton}>Có</button>
                    <button onClick={cancelDeleteAccount} style={styles.cancelButton}>Hủy</button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    toggleButton: {
        marginLeft: '10px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '3px',
    },
    form: {
        marginBottom: '20px',
    },
    input: {
        display: 'block',
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    message: {
        color: 'red',
        margin: '10px 0',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        marginTop: '10px',
        borderRadius: '4px',
    },
    confirmDelete: {
        marginTop: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
    confirmButton: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginRight: '10px',
        borderRadius: '3px',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        color: 'black',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '3px',
    },
};

export default User;