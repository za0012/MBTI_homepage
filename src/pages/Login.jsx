import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext); //이부분 헷갈림

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
            id,
            password,
        });
      
        if (response.data.success === true) {
            alert('로그인 완료');
            navigate('/Home');
        } else {
            alert('로그인 실패');
        }

        setUser(response.data);
    };

    return (
        <div className="flex justify-center items-center flex-col h-full">
            <h1>여기는 로그인 페이지입니다.</h1>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default Login;
