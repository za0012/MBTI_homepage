import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';

const Signup = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register', {
            id,
            password,
            nickname,
        });
        if (response.data.success === true) {
            alert('회원가입 완료');
            navigate('/Home');
        } else {
            alert('회원가입 실패');
        }
    };

    return (
        <div>
            <h1>여기는 회원가입 페이지입니다.</h1>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="nickname"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <button>회원가입</button>
            </form>
        </div>
    );
};

export default Signup;
