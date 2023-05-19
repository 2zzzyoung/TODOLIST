import React, { useState, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/components/list.css";

export default function List({ todo }) {
    const [isCheck, setIsCheck] = useState(false);
    const checkRef = useRef();

    const onChangeChecked = () => {
        if (checkRef.current.checked === true) {
            setIsCheck(true);
        } else {
            setIsCheck(false);
        }
    };

    console.log(checkRef);

    return (
        <>
            <div className="list">
                <p>{todo}</p>
                <div className="btn_box">
                    <button className="btn">
                        <AiOutlineEdit />
                    </button>
                    <button className="btn">
                        <MdDeleteOutline />
                    </button>
                    <input type="checkbox" id="check" ref={checkRef} onChange={onChangeChecked} />
                    <label htmlFor="check">{isCheck && "V"}</label>
                </div>
            </div>
        </>
    );
}
