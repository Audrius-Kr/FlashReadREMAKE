import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CustomButton from "../../components/buttons/customButton.tsx";
import '../../boards/css/buttons.css';
import '../../boards/css/deleteAccount.css';
import axios from '../../components/axiosWrapper';

const DeleteAccount: React.FC = () => {
    const { isAuthenticated, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logOut();
        navigate('/login');
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated, navigate]);

    const [error, setError] = useState<string | null>(null);
    
    const handleAccountDeletion = async () => {
        try {
            const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('authToken='));
            const token = tokenCookie ? tokenCookie.split('=')[1] : null;
            await axios.get('/api/Users/DeleteUser', {
                headers: { Authorization: `Bearer ${token}` }
            });
            handleLogout();
        } catch (error) {
            setError('Account deletion failed. Please try again.');
        }
    }
    return (
        <div className="deleteAccountPage">
            <div className="accountDeletionHeader">
                <h1 className="accountDeletionTitle">Account deletion</h1>
            </div>
            
            <div className="accountDeletionContent">
                <h1 className="confirmationQuestionText">Are you sure you want to delete your account?</h1>
                <span className="confirmationClarificationText">This action is irreversible</span>
                <div className="accountDeletionButtonContainer">
                    <CustomButton label="Confirm" className="wideButton" onClick={handleAccountDeletion} />
                    <CustomButton label="Return" className="wideButton" onClick={() => navigate("/settings")} />
                </div>
            </div>

            <div className="accountDeletionFooter">

            </div>
        </div>
    );
};

export default DeleteAccount;