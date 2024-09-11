import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const Profile = () => {
    const { user } = useContext(UserContext);
    const queryClient = useQueryClient();
  const accessToken = user?.accessToken;
  
   const getUser = async () => {
       const response = await axios.get('https://moneyfulpublicpolicy.co.kr/user');
       return response.data;
   };

    const { data, isPending, isError } = useQuery({
        queryKey: ['user'],
        queryFn: async () =>
            await axios.get('https://moneyfulpublicpolicy.co.kr/user', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
    });
    console.log('data', data);
    return (
        <div>
            <h1>마이페이지</h1>
            {data.map((myPage) => {
                return (
                    <div>
                        <p>
                            {myPage.id} {myPage.nickname}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Profile;
