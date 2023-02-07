import { useNavigate } from "react-router-dom";
export default function F0FError() {
    const navigate = useNavigate();
    return (
        <div className="error-content">
            <h1>
                <p>페이지를 찾을 수 없습니다.</p>
                <p>(404 에러)</p>
            </h1>
            <p>찾으려는 페이지가 제거 또는 이름이 변경되었거나,</p>
            <p>일시적으로 사용이 중단되었습니다.</p>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                홈으로 돌아가기
            </button>
        </div>
    );
}
