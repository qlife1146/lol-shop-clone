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
                                placeholder="지금은 작동하지 않습니다. 죄송합니다."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled
                            className="search-bar-button"
                        >
                            검색
                        </button>
                    </form>
                </div>
                <div className="header-menu">
                    <li>
                        <Link to="/mypage">
                            <span
                                title="내 정보"
                                className="mypage-span"
                            >
                                <svg
                                    width="19"
                                    height="16"
                                    viewBox="0 0 19 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.023 15.71a8.784 8.784 0 0 0 3.336-6.894C18.359 3.947 14.392 0 9.5 0 4.608 0 .641 3.947.641 8.816a8.784 8.784 0 0 0 3.336 6.894c.44-1.152 2.167-5.024 5.523-5.024s5.083 3.872 5.523 5.024zM7.889 8.343a2.968 2.968 0 0 0 1.611.473 2.95 2.95 0 0 0 2.05-.821 2.76 2.76 0 0 0 .85-1.984 2.74 2.74 0 0 0-.49-1.558 2.88 2.88 0 0 0-1.3-1.034 2.99 2.99 0 0 0-1.676-.16 2.93 2.93 0 0 0-1.484.769 2.778 2.778 0 0 0-.793 1.436 2.72 2.72 0 0 0 .165 1.62c.219.513.59.951 1.067 1.26z"
                                        fill="#CAAB67"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    );
}
