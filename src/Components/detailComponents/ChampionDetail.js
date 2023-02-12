import { useParams } from "react-router-dom";
import "../css/championDetail.css";

export default function ChampionDetail(props) {
    const { id } = useParams();
    // const getInfo = props.data.find(function (x) {
    //     return x.name === name;
    // });

    return (
        <div className="champion-detail-page">
            <div
                className="champion-detail-img"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/champions/${id}.jpg")` }}
            >
                <img
                    src={process.env.PUBLIC_URL + "/images/champions/" + id + ".jpg"}
                    alt=""
                />
            </div>
            <div className="champion-detail-info">
                <div className="champion-detail-title">
                    {props.data[id - 1].name}, {props.data[id - 1].nickName}
                </div>
                <div className="description">이 챔피언, 어떠세요?</div>
                <div className="purchase">
                    <div className="btn-purchase">{props.data[id - 1].rpPrice}</div>
                    <div className="btn-purchase">{props.data[id - 1].bePrice}</div>
                </div>
            </div>
        </div>
    );
}
