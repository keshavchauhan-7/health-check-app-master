import React from "react";
import UsersTable from "./components/UsersTable";
import HealthCheck from "./components/HealthCheck";

function App() {
    return (
        <div style={{ padding: "24px" }}>
            {/* Health Check Section */}
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <h1 style={{ marginBottom: "24px" }}>🚀 API Health Dashboard</h1>
                <HealthCheck />
            </div>

            {/* User List Section */}
            <div>
                <h2 style={{ textAlign: "center", marginBottom: "32px" }}>User Management</h2>
                <UsersTable />
            </div>
        </div>
    );
}

export default App;
