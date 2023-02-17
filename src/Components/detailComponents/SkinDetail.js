import { useParams } from "react-router-dom";
import "../css/skinDetail.css";

export default function SkinDetail(props) {
    const { id } = useParams();
    const skinId = parseInt(id.substr(-2));
    return (
        <div className="skin-detail-page">
            <div className="skin-detail-img">
                <img
                    src={process.env.PUBLIC_URL + "/images/skins/" + id + ".jpg"}
                    alt=""
                />
            </div>
            <div className="skin-detail-info">
                <div className="skin-detail-title">{props.data[skinId - 1].name}</div>
                <div className="skin-detail-title">{props.data[skinId - 1].championName}</div>
            </div>
            <div className="btn-purchase">
                <div className="btn-purchase-text">
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
                        {props.data[skinId - 1].rpPrice}
                    </div>
                </div>
            </div>
        </div>
    );
}
