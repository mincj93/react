import { useState, useRef, useEffect } from "react";

const Popup = () => {
    const [actionModal, setActionModal] = useState(false);
    const node = useRef();

    useEffect(() => {
        const clickOutside = (e) => {
            // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
            if (actionModal && node.current && !node.current.contains(e.target)) {
                setActionModal(false);
            }
        };

        document.addEventListener("mousedown", clickOutside);

        return () => {
            // Cleanup the event listener 
            // 이거 꼭 구현해주자. 상위 객체에서 useState가 값이 유지되어 한 번 더 클릭해야 작동하는 오류를 방지함.
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [actionModal]);

    return (
        <div ref={node}>
            <div className="flex shrink-0 pointer">
                <button onClick={() => setActionModal((pre) => !pre)}>모달창 생성</button>
            </div>
            {actionModal ? (
                <Modal setActionModal={setActionModal} />
            )
                :
                null}
        </div>
    );
}

const Modal = (props) => {
    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "white",
                padding: "0.625rem",
                border: "1px solid grey",
                zIndex: 10,
                borderRadius: "4px",
                backgroundColor: "aqua"
            }}
        >
            <div className="p-10" style={{ border: "1px solid" }}>
                <button onClick={() => props.setActionModal((pre) => !pre)}>모달창 닫기</button>
                모달창 입니다
            </div>
        </div>
    );
}

export default Popup;
