import React, { useContext, useEffect } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    // const isLoggedIn = user.success === true ? true : false;

    console.log('유저확인 ->', user);

    useEffect(() => {}, []);
    const handleLogout = () => {};
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>MBTI 테스트</h1>
                <nav>
                    <button
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        홈
                    </button>
                    <div className="space-x-4">
                        {user ? (
                            <>
                                <div>
                                    <button onClick={handleLogout}>로그아웃</button>
                                    <button
                                        onClick={() => {
                                            navigate('/Profile');
                                        }}
                                    >
                                        마이페이지
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div>
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
                            </div>
                        )}
                    </div>
                </nav>
            </header>
            {/* <main className="container mx-auto pt-10 main">{children}</main> */}
        </div>
    );
};

export default Header;
