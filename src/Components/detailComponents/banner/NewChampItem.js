import { NavLink } from "react-router-dom";
export default function NewChampItem() {
    return (
        <div className="home-new-item">
            <div className="home-title">
                <h2 className="home-title-text">새로운 챔피언</h2>
                <NavLink
                    to="/champions"
                    className="champion-link"
                >
                    <span className="text">전체보기</span>
                    <span className="icon">
                        <svg
                            width="13"
                            height="21"
                            viewBox="0 0 13 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 0L0 11l10 10 2.121-2.121L4.144 10.9l8.076-8.883L10 0z"
                                fill="#C79A3B"
                            />
                        </svg>
                    </span>
                </NavLink>
            </div>
			<div className='grid-item'>
				
			</div>
        </div>
    );
}
