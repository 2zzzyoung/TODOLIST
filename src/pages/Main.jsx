import React, { useEffect, useState } from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";
import "../styles/pages/main.css";
import List from "../components/list";
import Title from "../components/title";

export default function MainPage() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(() => getLocalStorage());

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const submitTodo = (e) => {
        setTodo(e.target.value);
    };

    const handleAddList = (e) => {
        e.preventDefault();
        setTodoList((prev) => [...prev, todo]);
        setTodo("");
    };

    return (
        <>
            <div className="wrap">
                <div className="container">
                    <div className="date">
                        <div className="day">14</div>
                        <div className="date_box">
                            <div className="week">SATURDAY</div>
                            <div className="month">OCT</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="list_box">
                            <Title value={"Todo List"} />
                            <div className="todo_box">
                                {todoList.map((el) => (
                                    <List el={el} />
                                ))}
                            </div>
                        </div>
                        <form className="input_box">
                            <Title value={"Add"} />
                            <div className="input">
                                <input placeholder="Write Your Goals" value={todo} onChange={submitTodo} />
                                <button onClick={handleAddList} className="plusButton">
                                    <BsFillPatchPlusFill />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">오른쪽</div>
            </div>
        </>
    );
}

const getLocalStorage = () => {
    const todoData = localStorage.getItem("todoList");

    return todoData ? JSON.parse(todoData) : [];
};
