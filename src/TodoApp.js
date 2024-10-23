import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoApp = ({ todos, setTodos, setTodoEdit }) => {
    const [input, setInput] = useState('');

    // Cập nhật todos vào LocalStorage mỗi khi có thay đổi
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (input) {
            const newTodo = { id: Date.now(), text: input }; // Tạo todo mới với id
            setTodos([...todos, newTodo]);
            setInput('');
        }
    };

    const handleEditTodo = (todo) => {
        setTodoEdit(todo); // Lưu todo đang được chỉnh sửa
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Todo List</h1>
            <div style={styles.inputContainer}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Thêm công việc mới..." 
                    style={styles.input}
                />
                <button onClick={handleAddTodo} style={styles.button}>Thêm</button>
            </div>
            <ul style={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id} style={styles.listItem}>
                        {todo.text}
                        <div style={styles.buttonContainer}> {/* Thêm div để chứa các nút */}
                            <Link to={`/menu/todo-app/edit/${todo.id}`} onClick={() => handleEditTodo(todo)} style={styles.editLink}>
                                Sửa
                            </Link>
                            <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>Xóa</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/menu" style={styles.backToMenuLink}>Quay lại Menu</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '100%',
        padding: '20px',
    },
    title: {
        marginBottom: '20px',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        marginRight: '10px',
        width: '300px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        width: '100%',
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        border: '1px solid #ccc',
        marginTop: '5px',
        width: '300px',
    },
    buttonContainer: {
        display: 'flex', // Sử dụng flexbox để đặt các nút gần nhau
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginLeft: '5px',
    },
    editLink: {
        marginLeft: '5px',
        color: 'white',
        backgroundColor: '#007BFF',
        padding: '5px 10px',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
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

export default TodoApp;
