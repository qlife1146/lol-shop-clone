//홈 버튼, 개인정보 등
import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/header.css";
export default function Header() {
    const [test, setTest] = useState(0);
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <span>상점</span>
                </Link>
            </div>
            <div className="header-menu">
                <li>
                    <Link to="/mypage">
                        <span title="내 정보">
                            <img
                                src={process.env.PUBLIC_URL + "images/icons/header/user.png"}
                                alt=""
                                style={{ visibility: "none" }}
                            />
                        </span>
                    </Link>
                </li>
            </div>
        </div>
    );
}
