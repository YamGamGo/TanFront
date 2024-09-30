import React, { useState } from 'react';
import axios from 'axios';

function PurchasePage() {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleBuy = async () => {
        try {
            const response = await axios.post('/api/purchase', {
                email,
                address
            });

            console.log('구매 성공:', response.data);
            alert('구매완료');
        } catch (error) {
            console.error('구매 실패:', error);
            alert('구매 실패');
        }
    };

    return (
        <div>
            <h1>구매 페이지</h1>
            <label>
                이메일 주소:
                <input
                    type="email"
                    placeholder="이메일 입력"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                주소:
                <input
                    type="text"
                    placeholder="주소 입력"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <button onClick={handleBuy}>구매하기</button>
        </div>
    );
}

export default PurchasePage;


