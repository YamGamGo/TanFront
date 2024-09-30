// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './page/Homepage';
import Information from "./page/Information";
import PurchasePage from "./page/PurchasePage"; // 구매 페이지 임포트

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/information" element={<Information />} />
                <Route path="/purchase/:id" element={<PurchasePage />} /> {/* 구매 페이지 경로 추가 */}
            </Routes>
        </Router>
    );
}

export default App;


