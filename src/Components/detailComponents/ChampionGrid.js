import championList from "../../data/champion";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/championGrid.css";

export default function ChampionGrid() {
    const [items] = useState(championList);
    const navigate = useNavigate();
    return (
        <div>
            <Row>
                {items.map((_, i) => (
                    <Col
                        xs={12}
                        md={4}
                    >
                        <div
                            key={_.id}
                            className="champion-card"
                            onClick={() => {
                                navigate("/champions/" + _.id);
                            }}
                        >
                            <div
                                className="champion-img"
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/champions/${i + 1}.jpg")` }}
                            ></div>
                            <div className="champion-info">
                                <div className="champion-name">{_.name}</div>
                                <div className="champion-price">
                                    <div className="price-rp">{_.rpPrice}</div>
                                    <div className="price-be">{_.bePrice}</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
