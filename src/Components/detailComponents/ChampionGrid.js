import championList from "../../data/champion";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/championGrid.css";

export default function ChampionGrid() {
    const [items] = useState(championList);
    const navigate = useNavigate();
    return (
        <div className="content-area">
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
                                    <div className="champion-grid-price-rp">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13.714 5.096L11.036 3 8.357 5.096v7.525l2.679 1.882 2.678-1.882V5.096zM18 9.934l1.071-.806-3.214-2.957v7.525l-3.75 2.688v2.687l6.964-4.676L18 13.16V9.934zM6.214 6.17L3 9.128l1.071.806v3.225L3 14.395l6.964 4.676v-2.687l-3.75-2.688V6.171z"
                                                fill="#c79a3b"
                                            />
                                        </svg>
                                        {_.rpPrice}
                                    </div>
                                    <div className="champion-grid-price-be">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.447 4.604L9.954 1.007 3.843 8.202l5.239 1.799 4.365-5.397zm.874 2.699L10.828 10.9l3.493 1.799 2.619-2.698-2.619-2.698zM9.954 18.995l3.493-4.497L2.97 10.001l6.984 8.994z"
                                                fill="#0ACBE6"
                                            />
                                        </svg>
                                        {_.bePrice}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
