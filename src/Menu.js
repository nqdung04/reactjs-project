import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      {/* Menu bên trái */}
      <div style={styles.menu}>
        <ul style={styles.menuList}>
          <li style={styles.menuItem}>
            <Link 
              to="todo-app" 
              style={{ ...styles.link, backgroundColor: hoveredLink === 'todo' ? '#007BFF' : 'transparent' }} 
              onMouseEnter={() => setHoveredLink('todo')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Todo App
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link 
              to="user" 
              style={{ ...styles.link, backgroundColor: hoveredLink === 'user' ? '#007BFF' : 'transparent' }} 
              onMouseEnter={() => setHoveredLink('user')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              User
            </Link>
          </li>
          <li style={styles.menuItem}>
            <div 
              style={styles.teamLink} 
              onClick={() => setShowTeamDropdown(!showTeamDropdown)} 
              onMouseEnter={() => setHoveredLink('team')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Team
              <span style={styles.dropdownArrow}> ▼</span>
            </div>
            {showTeamDropdown && (
              <ul style={styles.dropdownList}>
                <li style={styles.dropdownItem}>
                  <Link to="team" style={styles.link}>View Teams</Link>
                </li>
              </ul>
            )}
          </li>
          <li style={styles.menuItem}>
            <Link 
              to="files" 
              style={{ ...styles.link, backgroundColor: hoveredLink === 'files' ? '#007BFF' : 'transparent' }} 
              onMouseEnter={() => setHoveredLink('files')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Files
            </Link>
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
    backgroundColor: '#000', // Nền đen
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
    color: 'white', // Chữ trắng
    textDecoration: 'none',
    padding: '10px',
    display: 'block',
    transition: 'background-color 0.3s', // Hiệu ứng chuyển màu
  },
  teamLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  dropdownArrow: {
    marginLeft: '5px', // Khoảng cách giữa chữ "Team" và mũi tên
  },
  dropdownList: {
    listStyleType: 'none',
    padding: '0',
    margin: '10px 0 0 0',
    backgroundColor: '#1a1a1a', // Nền cho dropdown
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  dropdownItem: {
    margin: '0',
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
  },
};

export default Menu;