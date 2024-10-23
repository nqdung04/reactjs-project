import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from './img/ScreenshotLogin.png'; // Import ảnh từ thư mục img

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Mật khẩu không khớp!');
            setSuccess(''); // Xóa thông báo thành công nếu có
            return;
        }

        // Lưu thông tin đăng ký vào localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        setSuccess('Đăng ký thành công!');
        setError(''); // Xóa thông báo lỗi khi đăng ký thành công

        // Chuyển hướng sau 1 giây
        setTimeout(() => {
            navigate('/login'); // Chuyển đến trang đăng nhập
        }, 1000);
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img 
                    src={loginImage}  // Sử dụng ảnh đã import
                    alt="Login Illustration" 
                    className="image" 
                />
            </div>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h1>Đăng ký tài khoản</h1>
                {error && <p style={styles.error}>{error}</p>}
                {success && <p style={styles.success}>{success}</p>}

                <div style={styles.inputGroup}>
                    <div style={styles.inputContainer}>
                        <i className="fas fa-envelope" style={styles.iconEmail}></i>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Nhập Email'
                            required
                            style={styles.input}
                        />
                    </div>
                </div>

                <div style={styles.inputGroup}>
                    <div style={styles.passwordContainer}>
                        <i className="fas fa-lock" style={styles.iconLock}></i>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Nhập mật khẩu'
                            required
                            style={styles.input}
                        />
                        <i 
                            className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} 
                            onClick={() => setShowPassword(!showPassword)} 
                            style={styles.icon}
                        ></i>
                    </div>
                </div>

                <div style={styles.inputGroup}>
                    <div style={styles.passwordContainer}>
                        <i className="fas fa-lock" style={styles.iconLock}></i>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Nhập lại mật khẩu'
                            required
                            style={styles.input}
                        />
                        <i 
                            className={`fas ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`} 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                            style={styles.icon}
                        ></i>
                    </div>
                </div>

                <button type="submit" style={styles.button}>Đăng Ký</button>
                <Link to='/login' style={styles.link}>Hoặc đăng nhập tài khoản</Link>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    imageContainer: {
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '26%',
    },
    image: {
        width: '130%',
        height: 'auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '400px',
    },
    inputGroup: {
        marginBottom: '20px',
        width: '100%',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
        paddingLeft: '40px',
        transition: 'border-color 0.3s ease',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: '#00BDD6',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '15px',
    },
    success: {
        color: 'green',
        marginBottom: '15px',
    },
    passwordContainer: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        right: '10px',
        cursor: 'pointer',
        fontSize: '20px',
    },
    iconEmail: {
        position: 'absolute',
        left: '10px',
        fontSize: '20px',
        color: 'black',
    },
    iconLock: {
        position: 'absolute',
        left: '10px',
        fontSize: '20px',
        color: 'black',
    },
    link: {
        marginTop: '10px',
        textDecoration: 'none',
        color: '#007BFF',
        fontSize: '14px',
    },
};

export default Register;
