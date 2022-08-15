import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import SubscriptionPage from "../pages/SubscriptionPage";
import PlanPage from '../pages/PlanPage';
import HomePage from '../pages/HomePage';
import UserContext from "../context/UserContext";
import { useState } from "react";

export default function App() {
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState('');

    return (
        <UserContext.Provider value={{userData, setUserData, token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/subscriptions" element={<SubscriptionPage />} />
                    <Route path="/subscriptions/:ID_PLAN" element={<PlanPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}