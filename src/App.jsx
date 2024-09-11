import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import TestPage from './pages/TestPage';
import TestResultPage from './pages/TestResultPage';
import UserContextProvider, { UserContext } from './context/UserContext';
import Header from './components/Header';
import './App.css';

const PublicRoute = () => {
    const { user } = useContext(UserContext);
    if (user?.success === true) {
        alert('로그인이 돼있습니다.');
        return <Navigate to="/Home" />;
    }
    return <Outlet />;
};

const PrivateRoute = () => {
    const { user } = useContext(UserContext);
    if (!!!user?.success) {
        alert('로그인이 안 돼있습니다.');
        return <Navigate to="/Login" />;
    }
    return <Outlet />;
};

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="" element={<PrivateRoute />}>
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/TestPage" element={<TestPage />} />
                        <Route path="/TestResultPage" element={<TestResultPage />} />
                    </Route>
                    <Route path="" element={<PublicRoute />}>
                        <Route path="/Login" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Route>
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;
