import React, { useEffect, useState } from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";
import "../styles/pages/main.css";
import List from "../components/list";
import Title from "../components/title";
import { monthFilter, date, week } from "../components/date";

export default function MainPage() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(() => getLocalstorage());
    const addTodo = (todos) => {
        setTodoList([...todoList, todos]);
    };
    const handleUpdate = (updated) => setTodoList(todoList.map((todo) => (todo.id === updated.id ? updated : todo)));
    const handleDelete = (deleted) => setTodoList(todoList.filter((todo) => todo.id !== deleted.id));

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const submitTodo = (e) => {
        setTodo(e.target.value);
    };

    const handleAddList = (e) => {
        e.preventDefault();
        if (todo.trim().length === 0) {
            return;
        }
        addTodo({
            id: todoList.length + 1,
            todo,
            status: "active",
        });
        setTodo("");
    };

    return (
        <>
            <div className="wrap">
                <div className="container">
                    <div className="date">
                        <div className="day">{date}</div>
                        <div className="date_box">
                            <div className="week">{week.toUpperCase()}</div>
                            <div className="month">{monthFilter.toUpperCase()}</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="list_box">
                            <Title value={"Todo List"} />
                            <div className="todo-box">
                                {todoList.map((el, id) => (
                                    <List todos={el} key={id} onUpdate={handleUpdate} onDelete={handleDelete} />
                                ))}
                            </div>
                        </div>
                        <div className="input_box">
                            <Title value={"Add"} />
                            <form className="input" onSubmit={handleAddList}>
                                <input placeholder="Write Your Goals" value={todo} onChange={submitTodo} />
                                <button className="plusButton">
                                    <BsFillPatchPlusFill />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">오른쪽</div>
            </div>
        </>
    );
}

const getLocalstorage = () => {
    const todoList = localStorage.getItem("todoList");

    return todoList ? JSON.parse(todoList) : [];
};
