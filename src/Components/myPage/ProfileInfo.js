import userData from "../../data/userInfo";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileTop() {
    const [data, setData] = useState(userData);
    if (data.status === "logged-in") {
        return (
            <div className="mypage">
                <div className="profile-container">
                    <div className="profile-icon"></div>
                    <div className="profile-info">
                        <div className="profile-name">{data.name}</div>
                        <div className="profile-money">
                            <div className="rpMoney">{data.rp}</div>
                            <div className="beMoney">{data.be}</div>
                        </div>
                    </div>
                </div>
                <div className="mypage-link">
                    <li>
                        <Link to="/payments">RP 충전</Link>
                    </li>
                    <li>
                        <Link to="/history">구매내역</Link>
                    </li>
                    <li>
                        <Link to="/redeem">코드사용</Link>
                    </li>
                    <li>
                        <Link to="/logout">로그아웃</Link>
                    </li>
                </div>
            </div>
        );
    } else {
        return <div>로그인이 필요합니다.</div>;
    }
}
