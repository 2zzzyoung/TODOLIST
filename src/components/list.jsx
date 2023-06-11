import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/components/list.css";
import { useState } from "react";

export default function List({ todos, onUpdate }) {
    const { id, todo, status } = todos;
    const handleChange = (e) => {
        const updateStatus = e.target.checked ? "completed" : "active";
        console.log(e.target.checked);
        const updateTodos = { ...todos, status: updateStatus };
        onUpdate(updateTodos);
    };
    // const [checkbox, setCheckbox] = useState("");

    // const onToggleChecked = (id) => {
    //     const updateCheck = isChecked.map((checked) => {
    //         if (checked.id === id) {
    //             return { ...checked, completed: !checked.completed };
    //         }
    //         return checked;
    //     });
    //     setIsChecked(updateCheck);
    //     localStorage.setItem("isChecked", JSON.stringify(updateCheck));
    // };
    const onDelete = () => {};
    const onEdit = () => {};

    return (
        <>
            <div className="list">
                <input
                    type="checkbox"
                    id={id}
                    className="check_box"
                    onChange={handleChange}
                    checked={status === "completed"}
                />
                <label htmlFor={id}>{status === "completed" ? <AiOutlineCheck className="check" /> : null}</label>
                <p>{todo}</p>
                <div className="btn_box">
                    <button className="btn" onClick={onEdit}>
                        <AiOutlineEdit />
                    </button>
                    <button className="btn" onClick={onDelete}>
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </>
    );
}
