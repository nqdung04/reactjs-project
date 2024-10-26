import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Đăng xuất 
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      {/* Menu bên trái */}
      <div style={styles.menu}>
        <ul style={styles.menuList}>
          <li><h3>General</h3></li>
          <li style={styles.menuItem}>
            <NavLink 
              to="todo-app" 
              style={({ isActive }) => ({ 
                ...styles.link, 
                color: isActive ? '#4B0082' : 'black', // Chữ tím đậm khi được chọn
                backgroundColor: isActive ? '#E0BBE4' : 'transparent'
              })}
            >
              Todo App
            </NavLink>
          </li>
          <li style={styles.menuItem}>
            <NavLink 
              to="user" 
              style={({ isActive }) => ({ 
                ...styles.link, 
                color: isActive ? 'purple' : 'black', // Chữ tím đậm khi được chọn
                backgroundColor: isActive ? '#E0BBE4' : 'transparent'
              })} 
            >
              User
            </NavLink>
          </li>
          <li style={styles.menuItem}>
            <NavLink 
              to="files" 
              style={({ isActive }) => ({ 
                ...styles.link, 
                color: isActive ? '#4B0082' : 'black', // Chữ tím đậm khi được chọn
                backgroundColor: isActive ? '#E0BBE4' : 'transparent'
              })} 
            >
              Files
            </NavLink>
          </li>
          <li style={styles.menuItem}>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </li>
        </ul>
      </div>

      {/* Nội dung bên phải sẽ hiển thị nội dung của các Route con */}
      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  menu: {
    width: '200px',
    backgroundColor: '#FFF',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    margin: '10px 0',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    padding: '10px',
    display: 'block',
    transition: 'background-color 0.3s, color 0.3s', // Hiệu ứng chuyển màu
    borderRadius: '5px', // Bo góc nhẹ
  },
  logoutButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f9f9f9', //nền các trang màu xám
  },
};

export default Menu;
