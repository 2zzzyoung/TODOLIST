import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import "../styles/pages/main.css";
import List from "../components/list";
import Title from "../components/title";
import { monthFilter, date, week } from "../components/date";
import Weather from "../components/weather";
import Timer from "../components/timer";

export default function MainPage({ filter, filters, onFilterChange }) {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(() => getLocalstorage());

    const addTodo = (todos) => {
        setTodoList([...todoList, todos]);
    };
    const handleUpdate = (updated) => setTodoList(todoList.map((todo) => (todo.id === updated.id ? updated : todo)));
    const handleDelete = (deleted) => setTodoList(todoList.filter((todo) => todo.id !== deleted));

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

    const filtered = FilteredTodo(todoList, filter);

    const allClearTodo = () => {
        setTodoList([]);
    };

    return (
        <div className="wrap">
            <div className="wrap_container">
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
                            <div className="filter_container">
                                {filters.map((value, index) => (
                                    <li key={index} className="category">
                                        <button className="filter_btn" onClick={() => onFilterChange(value)}>
                                            {value}
                                        </button>
                                    </li>
                                ))}
                            </div>
                            <div className="todo-box">
                                {filtered.map((el, id) => (
                                    <List todos={el} key={id} onUpdate={handleUpdate} onDelete={handleDelete} />
                                ))}
                            </div>
                            <div className="btn_wrap">
                                <button className="clear_btn" onClick={allClearTodo}>
                                    All Clear
                                </button>
                            </div>
                        </div>
                        <div className="input_box">
                            <Title value={"Add"} />
                            <form className="input" onSubmit={handleAddList}>
                                <input placeholder="Write Your Goals" value={todo} onChange={submitTodo} />
                                <button className="plusButton">
                                    <VscAdd />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container, right_container">
                    <div className="right_wrap">
                        <Timer />
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    );
}

const getLocalstorage = () => {
    const todoList = localStorage.getItem("todoList");

    return todoList ? JSON.parse(todoList) : [];
};

function FilteredTodo(todoList, filter) {
    if (filter === "all") {
        return todoList;
    }
    return todoList.filter((todos) => todos.status === filter);
}
