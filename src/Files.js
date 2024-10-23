import React from 'react';

const Files = () => {
    return (
        <div style={styles.container}>
            <h1>Files</h1>
            <p>Đây là trang quản lý tệp tin.</p>
            {/* Thêm logic quản lý tệp tin tại đây */}
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
};

export default Files;