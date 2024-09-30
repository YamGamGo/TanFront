import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link 사용
import poo from './image/poo.jpg'; // 이미지 파일을 import

function Homepage() {
    const [test1, setTest1] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setTest1(res.data); // 문자열로 데이터를 받아서 상태 업데이트
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>

            <h1>상품명: {test1}</h1> {/*//test api 에서 받아온 문자 출력*/}

            <Link to="/information">
                <img src={poo} alt="Poo" style={{ width: '200px', height: '200px' }} />
            </Link> {/*// 푸바오 이미지 클릭시 상품 정보 페이지로 이동*/}
        </div>
    );
}
export default Homepage;
