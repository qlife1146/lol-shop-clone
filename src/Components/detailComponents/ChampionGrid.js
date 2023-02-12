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
                            className="champion-grid-card"
                            onClick={() => {
                                navigate("/champions/" + _.id);
                            }}
                        >
                            <div
                                className="champion-grid-img"
                                style={{
                                    backgroundImage: `url(
                                        ${process.env.PUBLIC_URL}/images/champions/${_.id}.jpg
                                    )`,
                                }}
                            ></div>
                            <div className="champion-grid-info">
                                <div className="champion-grid-name">{_.name}</div>
                                <div className="champion-grid-price">
                                    <div className="champion-grid-price-rp">{_.rpPrice}</div>
                                    <div className="champion-grid-price-be">{_.bePrice}</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
