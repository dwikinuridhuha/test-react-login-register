import React from "react";
import AuthService from "../services/auth.service";

const Dashboard = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    Welcome {currentUser?.data?.email}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
