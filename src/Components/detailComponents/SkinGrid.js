import useSkins from "../../data/useSkins";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/skinGrid.css";

export default function SkinGrid() {
    const skins = useSkins();
    const navigate = useNavigate();
    return (
        <div className="skin-content-area">
            <Row>
                {skins.map((_) => (
                    <Col
                        xs={12}
                        md={4}
                        className="skin"
                    >
                        <div
                            className="skin-grid-card"
                            onClick={() => {
                                navigate("/skins/" + _.championId + "00" + _.id);
                            }}
                        >
                            <div
                                className="skin-grid-img"
                                style={{
                                    backgroundImage: `url(
                                            ${process.env.PUBLIC_URL}/images/skins/${_.championId + "00" + _.id}.jpg
                                        )`,
                                }}
                            ></div>
                            <div className="skin-grid-info">
                                <div className="skin-grid-name">{_.name}</div>
                                <div className="skin-grid-price">
                                    {_.discountRate === 0 ? (
                                        <div className="skin-grid-price-rp">
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
                                    ) : (
                                        <div className="skin-grid-price-discounted">
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
                                            <span className="origin-price">{_.rpPrice}</span>
                                            <span className="discounted-price">{Math.round(_.rpPrice * ((100 - _.discountRate) * 0.01))}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
