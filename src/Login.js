import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import file CSS riêng
import loginImage from './img/ScreenshotLogin.png'; // Import ảnh từ thư mục img

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lấy thông tin đăng nhập từ localStorage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Kiểm tra thông tin đăng nhập
        if (email === storedEmail && password === storedPassword) {
            setMessage('Đăng nhập thành công!');
            setError(''); 

            // Chuyển hướng về trang Menu sau 1 giây
            setTimeout(() => {
                navigate('/menu');
            }, 1000);
        } else {
            setError('Thông tin đăng nhập không chính xác!');
            setMessage('');
        }
    };

    return (
        <div className="container">
            <div className="image-container">
                <img 
                    src={loginImage}  // Sử dụng ảnh đã import
                    alt="Login Illustration" 
                    className="image" 
                />
            </div>
            <form onSubmit={handleSubmit} className="form">
                <h1>Hãy bắt đầu</h1>
                <p>Đăng nhập tài khoản của bạn</p>
                
                {message && <div className="success">{message}</div>}
                {error && <p className="error">{error}</p>}
                
                <div className="input-group">
                    <div className="input-container">
                        <i className="fas fa-envelope icon-email"></i>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Nhập Email'
                            required
                            className="input"
                        />
                    </div>
                </div>
                
                <div className="input-group">
                    <div className="password-container">
                        <i className="fas fa-lock icon-lock"></i>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Nhập mật khẩu'
                            required
                            className="input"
                        />
                        <i 
                            className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} icon`} 
                            onClick={() => setShowPassword(!showPassword)} 
                        ></i>
                    </div>
                </div>

                <button type="submit" className="button">Đăng Nhập</button>
                <Link to='/register' className="link">Hoặc đăng ký tài khoản</Link>
            </form>
        </div>
    );
};

export default Login;
