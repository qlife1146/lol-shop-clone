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
                    <span>챔피언</span>
                </NavLink>
                <NavLink
                    to="/skins"
                    className="skin-link"
                >
                    <span>스킨</span>
                </NavLink>
            </ul>
        </div>
    );
}
