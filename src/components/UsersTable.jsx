import { useState } from "react";
import { getUsers } from "../services/api";
import GlassSpinnerLoader from "./GlassSpinnerLoader";

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(`Server: ${err.response.data.message}`);
            } else if (err.response && err.response.status) {
                setError(`HTTP ${err.response.status}: ${err.message}`);
            } else {
                setError(err.message || "Error fetching users");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '32px auto',
                padding: '0 16px',
                textAlign: 'center',
            }}
        >
            <button
                className="btn-primary"
                onClick={fetchUsers}
                style={{ 
                    marginBottom: users.length > 0 ? '0' : '32px', 
                    fontSize: '1.05em', 
                    minWidth: 140,
                    display: users.length > 0 ? 'none' : 'inline-block'
                }}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Load Users'}
            </button>

            {loading && (
                <div style={{ marginBottom: 32, padding: '24px 0' }}>
                    <GlassSpinnerLoader size={56} />
                    <div style={{ 
                        color: '#1e40af', 
                        fontWeight: 600, 
                        marginTop: 16,
                        fontSize: '1.1em',
                        letterSpacing: '0.025em'
                    }}>
                        Loading users...
                    </div>
                </div>
            )}
            {error && (
                <p style={{ color: '#e53e3e', fontWeight: 500, marginBottom: 16 }}> {error}</p>
            )}

            {users.length > 0 && (
                <div
                    className="table-wrap"
                    style={{
                        overflowX: 'auto',
                        margin: '0 auto',
                        boxSizing: 'border-box',
                        borderRadius: 12,
                        boxShadow: '0 2px 8px 0 rgba(60, 60, 90, 0.06)',
                        background: '#fff',
                        padding: '8px',
                        maxWidth: '100%',
                    }}
                >
                    <table
                        className="table"
                        style={{
                            width: '100%',
                            minWidth: 320,
                            borderCollapse: 'collapse',
                            fontSize: '1em',
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ minWidth: 100 }}>Name</th>
                                <th style={{ minWidth: 160 }}>Email</th>
                                <th style={{ minWidth: 60 }}>Age</th>
                                <th style={{ minWidth: 140 }}>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <tr key={u._id}>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.age}</td>
                                    <td>{new Date(u.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default UsersTable;
