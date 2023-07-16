import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/components/list.css";
import { useEffect, useRef, useState } from "react";

export default function List({ todos, onUpdate, onDelete }) {
    const { id, todo, status } = todos;
    const handleChange = (e) => {
        const updateStatus = e.target.checked ? "completed" : "active";
        console.log(e.target.checked);
        const updateTodos = { ...todos, status: updateStatus };
        onUpdate(updateTodos);
    };
    const handleDelete = () => onDelete(todos);
    // const [edited, setEdited] = false;
    // const handleEdit = () => {
    //     setEdited(true);
    // };
    // const [newTodo, setNewTodo] = useState(todo);
    // const onChangeTodo = (e) => {
    //     setNewTodo(e.target.value);
    // };
    // const onClickEditButton = () => {
    //     const nextTodo = todos.map((item) => ({ ...item, todo: item.id === todos.id ? setNewTodo : todo }));
    //     onChangeTodo(newTodo);

    //     setEdited(false);
    // };
    // const editInputRef = useRef(null);

    // useEffect(() => {
    //     if (edited) {
    //         editInputRef.current.focus();
    //     }
    // }, [edited]);

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
                    <button className="btn">
                        <AiOutlineEdit />
                    </button>
                    <button className="btn" onClick={handleDelete}>
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </>
    );
}
