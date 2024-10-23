import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const TodoEdit = ({ todos, setTodos, todoEdit }) => {
    const [input, setInput] = useState(todoEdit ? todoEdit.text : '');
    const navigate = useNavigate();

    useEffect(() => {
        if (todoEdit) {
            setInput(todoEdit.text); // Nạp todo đang sửa vào input
        }
    }, [todoEdit]);

    const handleUpdateTodo = () => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoEdit.id ? { ...todo, text: input } : todo
        );
        setTodos(updatedTodos);
        navigate('/menu/todo-app'); // Điều hướng quay lại TodoApp sau khi cập nhật
    };

    return (
        <div style={styles.container}>
            <h1>Chỉnh sửa công việc</h1>
            <div style={styles.inputContainer}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Sửa công việc..." 
                    style={styles.input}
                />
                <button onClick={handleUpdateTodo} style={styles.button}>Lưu</button>
            </div>
            <Link to="/menu" style={styles.backToMenuLink}>Quay lại Menu</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Dịch về bên trái
        justifyContent: 'flex-start', // Căn chỉnh bên trên
        padding: '20px',
    },
    title: {
        marginBottom: '20px',
    },
    inputContainer: {
        display: 'flex', // Sử dụng flexbox để đặt input và button cạnh nhau
        alignItems: 'center',
        marginBottom: '10px',
    },
    input: {
        padding: '10px',
        width: '300px',
        marginRight: '10px', // Thêm khoảng cách giữa ô input và nút
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    backToMenuLink: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default TodoEdit;
