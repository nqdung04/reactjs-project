import React, { useState } from 'react';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTeam = () => {
        if (editIndex !== null) {
            // Sửa tên nhóm
            const updatedTeams = teams.map((team, index) => 
                index === editIndex ? teamName : team
            );
            setTeams(updatedTeams);
            setEditIndex(null);
        } else {
            // Thêm nhóm mới
            setTeams([...teams, teamName]);
        }
        setTeamName('');
    };

    const handleEditTeam = (index) => {
        setTeamName(teams[index]);
        setEditIndex(index);
    };

    const handleDeleteTeam = (index) => {
        const updatedTeams = teams.filter((_, i) => i !== index);
        setTeams(updatedTeams);
    };

    return (
        <div style={styles.container}>
            <h1>Quản lý Nhóm</h1>
            <input 
                type="text" 
                value={teamName} 
                onChange={(e) => setTeamName(e.target.value)} 
                placeholder="Tên nhóm" 
                style={styles.input}
            />
            <button onClick={handleAddTeam} style={styles.button}>
                {editIndex !== null ? 'Cập nhật' : 'Thêm Nhóm'}
            </button>

            <h2>Danh sách Nhóm</h2>
            <ul style={styles.teamList}>
                {teams.map((team, index) => (
                    <li key={index} style={styles.teamItem}>
                        {team}
                        <button onClick={() => handleEditTeam(index)} style={styles.editButton}>Sửa</button>
                        <button onClick={() => handleDeleteTeam(index)} style={styles.deleteButton}>Xóa</button>
                    </li>
                ))}
            </ul>
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
    input: {
        padding: '10px',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginRight: '10px',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    teamList: {
        listStyleType: 'none',
        padding: '0',
    },
    teamItem: {
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#FFC107',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '3px',
        marginLeft: '10px',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '3px',
        marginLeft: '10px',
    },
};

export default Team;