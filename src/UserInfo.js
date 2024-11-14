import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUserStore from './UseUserStore';

const UserInfo = () => {
  const { user, loading, error, fetchUser } = useUserStore();

  // Fetch user khi component được mount
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {user ? (
        <>
          <img
            src={user.avatar}
            alt="Avatar"
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
          <p>Company: {user.company}</p>

          {/* Thêm nút để chuyển đến trang tin tức */}
          <Link to="/news" style={{ marginTop: '20px', display: 'inline-block' }}>
            <button>Go to News</button>
          </Link>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default UserInfo;
