import React, { useContext, useEffect } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    // const isLoggedIn = user.success === true ? true : false;

    console.log('유저확인 ->', user);

    return (
        <div>
            <header className="flex justify-between">
                <h1>MBTI 테스트</h1>
                <div>
                    <button
                        onClick={() => {
                            navigate('/Home');
                        }}
                    >
                        홈
                    </button>

                    {user ? (
                        <>
                            <button onClick={handleLogout}>로그아웃</button>
                            <button
                                onClick={() => {
                                    navigate('/Profile');
                                }}
                            >
                                마이페이지
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                로그인
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/sign-up');
                                }}
                            >
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
