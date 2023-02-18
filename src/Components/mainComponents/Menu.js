//스킨, 챔피언 등
import { NavLink } from "react-router-dom";
import "../css/menu.css";
export default function Menu() {
    return (
        <div className="menu-drawer">
            <ul className="menu-links">
                <NavLink
                    to="/champions"
                    className="champion-link"
                >
                    <div className="menu-flex">
                        <span>
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.063 6.294C15.063 1.882 8.5 1 8.5 1s-6.563.882-6.563 5.294.188 5.118-.937 6.177c0 0 .844 4.411 4.688 4.411 0 0-1.875-1.764 0-6.176 0 0-2.813 0-1.875-3.53 2.718 0 3.75 1.765 3.75 1.765v4.412l.937.882.938-.882V8.94s.937-1.765 3.75-1.765c.937 3.53-1.876 3.53-1.876 3.53 1.876 4.5 0 6.176 0 6.176 3.844 0 4.688-4.411 4.688-4.411-1.125-1.06-.938-1.765-.938-6.177z"
                                    fill="#989898"
                                />
                            </svg>
                        </span>
                        <span className="default">챔피언</span>
                    </div>
                </NavLink>
                <NavLink
                    to="/skins"
                    className="skin-link"
                >
                    <div className="menu-flex">
                        <span>
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.5 3.343c-3.25 0-7.5-1.57-7.5-1.57v3.922c0 7.844 7.5 10.197 7.5 10.197S16 13.46 16 5.695V1.774s-4.25 1.569-7.5 1.569zM2.667 7.264c0-.784 1.083-.784 1.666-.784 1.667 0 2.5 1.568 2.5 1.568s0 1.57-1.666 1.57c-1.5 0-2.5-1.491-2.5-2.354zM8.5 13.54c-2.583 0-3.333-2.353-3.333-2.353s1.166.784 3.333.784c2 0 3.333-.784 3.333-.784s-.75 2.353-3.333 2.353zm3.333-3.922c-1.666 0-1.666-1.569-1.666-1.569S11 6.48 12.667 6.48c.583 0 1.666 0 1.666.784 0 .863-1 2.353-2.5 2.353z"
                                    fill="#989898"
                                />
                            </svg>
                        </span>
                        <span>스킨</span>
                    </div>
                </NavLink>
            </ul>
        </div>
    );
}
