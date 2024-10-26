import React, { useState } from 'react';

const UserSettings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const password = localStorage.getItem('password');

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

        setTimeout(() => {
            window.location.href = '/login';
        }, 1000);
    };

    const cancelDeleteAccount = () => {
        setShowDeleteConfirm(false);
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleChangePassword} style={styles.form}>
                <h2>Đổi Mật Khẩu</h2>
                <input 
                    type="password" 
                    placeholder="Mật khẩu hiện tại" 
                    value={currentPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <input 
                    type="password" 
                    placeholder="Mật khẩu mới" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <input 
                    type="password" 
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

export default UserSettings;
