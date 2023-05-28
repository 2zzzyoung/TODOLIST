import React, { useState } from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";
import "../styles/pages/main.css";
import List from "../components/list";
import Title from "../components/title";

export default function MainPage() {
    const [todo, setTodo] = useState("");

    const submitTodo = (e) => {
        setTodo(e.target.value);
    };
    console.log(todo);

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
                            <List todo={todo} />
                        </div>
                        <div className="input_box">
                            <Title value={"Add"} />
                            <div className="input">
                                <input placeholder="Write Your Goals" onChange={submitTodo} />
                                <button className="plusButton">
                                    <BsFillPatchPlusFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">오른쪽</div>
            </div>
        </>
    );
}
