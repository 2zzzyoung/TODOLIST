import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick, TiTimes } from "react-icons/ti";
import "../styles/components/list.css";
import { useEffect, useRef, useState } from "react";

export default function List({ todos, onUpdate, onDelete }) {
    const { id, todo, status } = todos;
    const editedText = useRef(null);

    const [isEditClicked, setIsEditClicked] = useState(false);
    const [isDeleteClicked, setIsDeleteClicked] = useState(false);
    const [editTodo, setEditTodo] = useState("");
    useEffect(() => {
        if (isEditClicked) {
            editedText.current.focus();
        }
    }, [isEditClicked]);

    const handleChange = (e) => {
        const updateStatus = e.target.checked ? "completed" : "active";
        const updateTodos = { ...todos, status: updateStatus };
        onUpdate(updateTodos);
    };
    const handleDelete = () => {
        setIsDeleteClicked(true);
    };
    const handleEdit = () => {
        setIsEditClicked(true);
    };

    const submitEditedContent = () => {
        if (editTodo.length === 0) {
            return;
        }
        onUpdate({ ...todos, todo: editTodo });
        setIsEditClicked(false);
    };
    const cancelEdit = () => {
        setIsEditClicked(false);
    };
    const cancelDelete = () => {
        setIsDeleteClicked(false);
    };
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
                <div className="text_box">
                    {isEditClicked ? (
                        <div>
                            <input
                                className="edit_input"
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                                ref={editedText}
                            />
                        </div>
                    ) : (
                        <div className={`${status === "completed" ? "checked" : ""}`}>{todo}</div>
                    )}
                </div>
                <div className="btn_box">
                    {isEditClicked && !isDeleteClicked ? (
                        <div>
                            <button className="btn" onClick={submitEditedContent}>
                                <TiTick />
                            </button>
                            <button className="btn" onClick={cancelEdit}>
                                <TiTimes />
                            </button>
                        </div>
                    ) : !isEditClicked && isDeleteClicked ? (
                        <div>
                            <button className="btn" onClick={() => onDelete(id)}>
                                <TiTick />
                            </button>
                            <button className="btn" onClick={cancelDelete}>
                                <TiTimes />
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button className="btn" onClick={handleEdit}>
                                {status === "completed" ? "" : <AiOutlineEdit />}
                            </button>
                            <button className="btn" onClick={handleDelete}>
                                <MdDeleteOutline />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
