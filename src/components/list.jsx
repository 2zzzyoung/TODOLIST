import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/components/list.css";

export default function List({ todos, onUpdate, onDelete }) {
    const { id, todo, status } = todos;
    const handleChange = (e) => {
        const updateStatus = e.target.checked ? "completed" : "active";
        console.log(e.target.checked);
        const updateTodos = { ...todos, status: updateStatus };
        onUpdate(updateTodos);
    };
    const handleDelete = () => onDelete(todos);
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
    // const todoDone = todos.filter((todo) => todo.done);

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
