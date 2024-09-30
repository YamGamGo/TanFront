import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  /*페이지 이동을 위한 useNavigate 훅*/

function Information() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/information')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, []);



    return (
        <div>
            <h1>여기는 추가 정보 페이지입니다</h1>
            <h2>상품 목록</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <strong>{product.name}</strong>: {product.price.toLocaleString()} 원
                            <button onClick={() => navigate(`/purchase/${product.id}`)}>구매하기</button> {/* navigate로 경로 이동 */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}

export default Information;









