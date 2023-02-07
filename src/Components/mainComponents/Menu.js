//스킨, 챔피언 등
import { Link } from "react-router-dom";
import "../css/menu.css";
export default function Menu() {
    return (
        <div className="menu-drawer">
            <ul className="menu-links">
                <Link to="/champions">
                    <span>챔피언</span>
                </Link>
                <Link to="/skins">
                    <span>스킨</span>
                </Link>
            </ul>
        </div>
    );
}
