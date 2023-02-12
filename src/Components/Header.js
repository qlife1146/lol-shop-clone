//홈 버튼, 개인정보 등
import { Link } from "react-router-dom";
import "./css/header.css";
import styled from "styled-components";

const DivSpan = styled.span`
    background-image: url(${process.env.PUBLIC_URL}/images/icons/header/logo-league.png);
    width: 38px;
    height: 40px;
    background-size: auto 100%;
    text-indent: -1000px;
    overflow: hidden;
    display: block;
`;

export default function Header() {
    return (
        <div className="app-header">
            <div className="header">
                <div className="header-logo">
                    <Link
                        to="/"
                        className="link-a"
                    >
                        <DivSpan>상점</DivSpan>
                    </Link>
                </div>
                <div className="header-search-bar">
                    <form className="search-bar">
                        <div className="search-bar-input">
                            <input
                                type="text"
                                placeholder="통합 검색"
                            />
                        </div>
                        <button
                            type="submit"
                            className="search-bar-button"
                        >
                            검색
                        </button>
                    </form>
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
        </div>
    );
}
