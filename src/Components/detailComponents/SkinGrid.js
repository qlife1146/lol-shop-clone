import useSkins from "../../data/useSkins";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/skinGrid.css";

export default function SkinGrid() {
    const skins = useSkins();
    const navigate = useNavigate();
    return (
        <div>
            <Row>
                {skins.map((_) => (
                    <Col
                        xs={12}
                        md={4}
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
                            >
                                {console.log(_.championId + "00" + _.id)}
                            </div>
                            <div className="skin-grid-info">
                                <div className="skin-grid-name">{_.name}</div>
                                <div className="skin-grid-price">
                                    {_.discountRate === 0 ? (
                                        <div className="skin-grid-price-rp">{_.rpPrice}</div>
                                    ) : (
                                        <div className="skin-grid-price-discounted">
                                            <div className="skin-grid-original-price">{Math.round(_.rpPrice * ((100 - _.discountRate) * 0.01))}</div>
                                            <div className="skin-grid-discounted-price">{_.rpPrice}</div>
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
