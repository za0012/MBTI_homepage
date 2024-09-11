import React, { useContext, useState } from 'react';
import { updateProfile } from '../api/auth';
import { UserContext } from '../context/UserContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const [nickname, setNickname] = useState(user?.nickname || '');

    const queryClient = useQueryClient();
    const accessToken = user?.accessToken;

    console.log('accessToken', accessToken);

    const { data, isPending, isError } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            axios.get('https://moneyfulpublicpolicy.co.kr/user', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
    });

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    console.log('data', data);
    return (
        <div>
            <div>
                <h1>프로필 수정</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>닉네임</label>
                        <input onChange={handleNicknameChange} />
                    </div>
                    <button type="submit">프로필 업데이트</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
