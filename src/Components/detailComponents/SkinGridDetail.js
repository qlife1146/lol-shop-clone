import skinList from "../../data/skin";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SkinGridDetail() {
    const [items] = useState(skinList);
    const navigate = useNavigate();
    return (
        <div>
            <Row md={3}>
                {items.map((_, i) => (
                    <Col>
                        <div
                            className="skin-card"
                            onClick={() => {
                                navigate("/skins/" + _.id);
                            }}
                        >
                            <div className="skin-img">{}</div>
                            <div className="skin-info">
                                <div className="skin-name">{_.name}</div>
                                <div className="skin-price">
                                    <div className="price-rp">{_.rpPrice}</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
